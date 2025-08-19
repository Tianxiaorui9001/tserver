import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Server, Users, Heart, Gamepad2, Shield, Star, ArrowRight } from 'lucide-react'
import './App.css'

// 导入图片
import heroImage from './assets/5nBP5qquXNRR.jpg'
import survivalImage from './assets/vT7MKnMOPfbE.jpg'
import multiplayerImage from './assets/mifgLdhXbjNY.jpg'
import bannerImage from './assets/VnHP2mjv6eJ8.png'

function App() {
  const [copied, setCopied] = useState(false)
  const serverIP = 'txr9001.xyz'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Server className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-800">TServer</span>
            </motion.div>
            <motion.div 
              className="hidden md:flex space-x-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">首页</a>
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">特色功能</a>
              <a href="#join" className="text-gray-700 hover:text-green-600 transition-colors">加入方式</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">联系我们</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            欢迎来到 <span className="text-green-400">TServer</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            自由生存，快乐游戏 - 只要你玩得开心，游戏模式并不重要
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={() => document.getElementById('join').scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
            >
              <span>立即加入</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>

        {/* 滚动指示器 */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* 服务器信息区域 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">服务器信息</h2>
            <p className="text-xl text-gray-600">了解TServer的基本信息</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <img 
                src={bannerImage} 
                alt="TServer Banner" 
                className="rounded-lg shadow-2xl w-full"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Server className="h-6 w-6 text-green-600 mr-2" />
                  服务器详情
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">服务器名称:</span>
                    <span className="font-semibold text-green-600">TServer</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">服务器地址:</span>
                    <span className="font-semibold">{serverIP}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">端口:</span>
                    <span className="font-semibold text-orange-600">待定</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">游戏模式:</span>
                    <span className="font-semibold text-blue-600">生存为主</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <Heart className="h-5 w-5 text-red-500 mr-2" />
                  服务器理念
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  在TServer，我们相信游戏的本质是快乐。无论你喜欢建造宏伟的建筑、探索神秘的洞穴，
                  还是与朋友一起冒险，只要你玩得开心，游戏模式并不重要。这里是一个自由、友好的社区。
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 特色功能区域 */}
      <section id="features" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">特色功能</h2>
            <p className="text-xl text-gray-600">发现TServer的独特魅力</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gamepad2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">自由生存</h3>
                <p className="text-gray-600">
                  以生存模式为主，让你体验最原汁原味的Minecraft乐趣
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">友好社区</h3>
                <p className="text-gray-600">
                  温馨友好的玩家社区，一起分享游戏的快乐时光
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">稳定运行</h3>
                <p className="text-gray-600">
                  7x24小时稳定运行，为你提供流畅的游戏体验
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">多样体验</h3>
                <p className="text-gray-600">
                  支持多种游戏方式，让每个玩家都能找到属于自己的乐趣
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 游戏截图区域 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">游戏画面</h2>
            <p className="text-xl text-gray-600">感受TServer的精彩世界</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="relative group">
              <img 
                src={survivalImage} 
                alt="生存模式" 
                className="rounded-lg shadow-lg w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-semibold">生存冒险</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative group">
              <img 
                src={multiplayerImage} 
                alt="多人游戏" 
                className="rounded-lg shadow-lg w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-semibold">多人协作</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 加入方式区域 */}
      <section id="join" className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">如何加入TServer</h2>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">服务器地址</h3>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="bg-white/20 px-6 py-3 rounded-lg">
                  <span className="text-xl font-mono">{serverIP}</span>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors duration-300"
                  title="复制地址"
                >
                  <Copy className="h-5 w-5" />
                </button>
              </div>
              {copied && (
                <motion.p 
                  className="text-green-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  地址已复制到剪贴板！
                </motion.p>
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h4 className="text-lg font-semibold">启动游戏</h4>
                </div>
                <p className="text-white/80">
                  打开Minecraft Java版，确保你的游戏版本兼容
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h4 className="text-lg font-semibold">添加服务器</h4>
                </div>
                <p className="text-white/80">
                  在多人游戏中添加服务器，输入地址：{serverIP}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h4 className="text-lg font-semibold">开始游戏</h4>
                </div>
                <p className="text-white/80">
                  连接服务器，开始你的TServer冒险之旅！
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 页脚 */}
      <footer id="contact" className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Server className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">TServer</span>
            </div>
            <p className="text-gray-400 mb-6">
              自由生存，快乐游戏 - 欢迎加入我们的Minecraft社区
            </p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-500">
                © 2025 TServer. 让游戏更有趣。
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
