<template>
	<!-- 	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button @click="login">客服</button>
		<button @click="add">添加数据</button>
	</view> -->
	<view :style="{'margin-top':'30px','height':v_height,'width':'100%','position':'relative'}">
		<br>
		<view class='meto'>
			<view class="metoChild">
				<image src="../../static/love.png" mode="" style="width: 70px;height: 70px;"></image>
				你我
			</view>
		</view>
		<view class="loginMoudle">
			<view class="loginMoudleChild">
				<input type="text" class="userlogin" placeholder="请输入账号" v-model="username">
				<br>
				<input type="password" class="userlogin" placeholder="请输入密码" v-model="password">

			</view>
		</view>
		<view class="select">
			<view class="selectChild">
				<radio-group @change="radioChange">
					<radio style="transform:scale(0.7)"></radio>
					已阅读并同意服务协议和你我隐私保护指引
				</radio-group>
			</view>
		</view>
		<view class="login">
			<view class="loginChild" @tap="login">
				<image src="../../static/right.png" mode="" style="width: 70px;height: 70px;"></image>
			</view>
		</view>
		<view class="footer">
			<view @tap="resign">新用户注册</view>
			<view>手机号登录</view>
			<view @tap="wxLogin">微信登录</view>

		</view>
	</view>
</template>

<script>
	import {
		genTestUserSig
	} from '../../debug/GenerateTestUserSig.js';
	export default {
		data() {
			return {
				title: 'Hello',
				avatarUrl: '',
				username: "",
				password: "",
				flag: false,
				v_height: '30px',
			}
		},
		onLoad() {
			let that = this;
			let db = uniCloud.database();
			let dataset = db.collection('xiaoli_db');
			dataset.get().then(res => {
				uni.$avatarUrls = res.result.data;
			})
			setTimeout(() => {
				uni.getSystemInfo({
					success: res => {
						that.v_height = res.windowHeight + 'px'
					}
				})
			})
			
		},
		methods: {
			wxLogin() {
				let that = this;
				uni.getProvider({
					"service": "oauth",
					success: function(res) {
						console.log(res, '到时候发给')
						if (~res.provider.indexOf('weixin')) {
							uni.login({
								provider: 'weixin',
								// onlyAuthorize: true,
								success: function(loginRes) {
									// 登录成功
									console.log(loginRes, '嘿嘿')
									uni.getUserInfo({
										provider: 'weixin',
										success: function(infoRes) {
											console.log(JSON.stringify(infoRes.userInfo),'阿娇急啊')
											uni.$avatarUrl = infoRes.userInfo
												.avatarUrl;
											console.log('用户昵称为：' + infoRes.userInfo
												.avatarUrl);
										},
										fail(err) {
											console.log(err)
										}
									});

								},
								fail: function(err) {
									console.log(err)
									// 登录授权失败  
									// err.code是错误码
								}
							});

						}


					},
				})


			},
			radioChange() {
				this.flag = true;
			},
			resign() {

			},
			add() {
				
			},

			login() {
				if (this.username == '' || this.password == '') {
					uni.showToast({
						image: '../../static/warn.png',
						title: '输入账户或密码',
					})

				} else {
					if (!this.flag) {
						uni.showToast({
							image: '../../static/warn.png',
							title: '请勾选协议'
						})
					} else {
						const userID = this.username;
						const userSig = genTestUserSig(userID).userSig;
						uni.$TUIKit.login({
							userID: userID,
							userSig: userSig
						}).then(() => {
						uni.navigateTo({
							// url: `/pages/TUI-Chat/chat?conversationID=C2C小李哥`
							// url: `/pages/TUI-Index/index`
							// url: `/pages/TUI-Conversation/conversation/conversation`
							url: `/pages/total/total`
							
						});
						}).catch((error) => {
						
						});
				
						
					}
				}

			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.meto {
		width: 100%;
		height: 70px;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.metoChild {
		width: 120px;
		height: 70px;
		display: flex;
		font-size: 24px;
		line-height: 70px;
	}

	.loginMoudle {
		height: 110px;
		margin-top: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.userlogin {
		height: 40px;
		border-radius: 20px;
		background-color: #eee;
		padding-left: 20px;
	}

	.loginMoudleChild {
		width: 80%;
		height: 110px;
	}

	.select {
		height: 20px;
		margin-top: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.selectChild {

		width: 70%;
		height: 20px;
		font-size: 11px;

	}

	.login {
		height: 70px;
		margin-top: 50px;
		display: flex;
		align-items: center;
		justify-content: center;

	}

	.loginChild {
		width: 70px;
		height: 70px;
		background-color: cyan;
		border-radius: 50%;

	}

	.footer {
		display: flex;
		margin-top: 30px;
	}

	.footer view {
		margin-left: 8%;
	}
</style>
