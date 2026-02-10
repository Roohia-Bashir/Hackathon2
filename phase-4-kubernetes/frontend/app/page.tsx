'use client';

import React from 'react';
import Link from 'next/link';
import { MessageSquare, Brain, Zap, Shield, ArrowRight, Sparkles, Bot, CheckCircle, Clock, Users, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section with Modern Blue & Gray Design */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-24 sm:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-5 py-2.5 bg-blue-500/20 backdrop-blur-xl rounded-full text-blue-100 text-sm font-semibold mb-6 border border-blue-400/30 shadow-lg">
                <Sparkles className="w-4 h-4 mr-2 text-blue-300" />
                AI-Powered Intelligence + Manual Control
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                Smart Tasks,
                <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-gray-300 bg-clip-text text-transparent mt-2">
                  Your Way
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Experience the perfect blend of AI automation and manual control. Manage tasks through natural conversation or traditional buttons—the choice is yours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/register"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transform"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gray-800/50 backdrop-blur-xl rounded-xl hover:bg-gray-700/60 transition-all duration-300 border border-gray-600/50 shadow-xl"
                >
                  Sign In
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-blue-400">AI</div>
                  <div className="text-gray-400 text-sm mt-1">Powered</div>
                </div>
                <div className="text-center p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-blue-400">24/7</div>
                  <div className="text-gray-400 text-sm mt-1">Available</div>
                </div>
                <div className="text-center p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-blue-400">100%</div>
                  <div className="text-gray-400 text-sm mt-1">Secure</div>
                </div>
              </div>
            </div>

            {/* Right Column - AI Chat Interface Demo */}
            <div className="relative lg:block hidden">
              <div className="relative">
                {/* Floating Chat Card */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl backdrop-blur-lg border border-gray-200 transform hover:scale-105 transition-transform duration-300 overflow-hidden">
                  {/* Chat Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 border-b border-blue-500/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <Bot className="w-7 h-7 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-bold text-white">AI Assistant</h3>
                          <p className="text-xs text-blue-200">Ready to help you</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 bg-green-500/20 px-3 py-1.5 rounded-full border border-green-400/30">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                        <span className="text-xs text-green-100 font-semibold">Online</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="p-6 space-y-4 h-96 overflow-y-auto bg-gradient-to-br from-gray-50 to-blue-50/30">
                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl rounded-tr-sm px-5 py-3 max-w-xs shadow-lg">
                        <p className="text-sm font-medium">Add task: buy groceries</p>
                        <p className="text-xs text-blue-200 mt-1.5">2 min ago</p>
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 rounded-2xl rounded-tl-sm px-5 py-3 max-w-xs shadow-lg border border-gray-200">
                        <p className="text-sm font-medium">✓ Added 'Buy groceries' to your task list!</p>
                        <p className="text-xs text-gray-500 mt-1.5">Just now</p>
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl rounded-tr-sm px-5 py-3 max-w-xs shadow-lg">
                        <p className="text-sm font-medium">Show pending tasks</p>
                        <p className="text-xs text-blue-200 mt-1.5">Just now</p>
                      </div>
                    </div>

                    {/* AI Response with Task List */}
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 rounded-2xl rounded-tl-sm px-5 py-3 max-w-xs shadow-lg border border-gray-200">
                        <p className="text-sm font-semibold mb-3">Your pending tasks:</p>
                        <div className="space-y-2.5 text-sm">
                          <div className="flex items-center p-2 bg-gray-50 rounded-lg">
                            <div className="w-4 h-4 rounded border-2 border-blue-500 mr-2.5"></div>
                            <span className="text-gray-700">Buy groceries</span>
                          </div>
                          <div className="flex items-center p-2 bg-gray-50 rounded-lg">
                            <div className="w-4 h-4 rounded border-2 border-blue-500 mr-2.5"></div>
                            <span className="text-gray-700">Call dentist</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Just now</p>
                      </div>
                    </div>
                  </div>

                  {/* Chat Input */}
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="flex items-center space-x-3">
                      <input 
                        type="text" 
                        placeholder="Type your message..." 
                        className="flex-1 px-5 py-3.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        disabled
                      />
                      <button className="p-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-xl transition-all hover:scale-105">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Decorative Glow Effects */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400 rounded-full filter blur-3xl opacity-30"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-400 rounded-full filter blur-3xl opacity-30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(249, 250, 251)"/>
          </svg>
        </div>
      </div>

      {/* Dual Mode Section */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-5 py-2.5 bg-blue-100 rounded-full text-blue-700 text-sm font-bold mb-6 shadow-md">
              <Zap className="w-4 h-4 mr-2" />
              Dual Mode Flexibility
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Choose Your Style,
              <span className="block bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent mt-2">
                Achieve More
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Switch seamlessly between AI conversations and traditional controls. Both modes, one powerful platform.
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* AI Mode */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl">
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg">
                  ✨ AI Mode
                </div>
                
                <div className="mt-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Bot className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Conversational AI</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Simply chat with your AI assistant in natural language. No complex forms or buttons—just pure conversation.
                  </p>
                  
                  <div className="space-y-3.5">
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 ml-3 group-hover/item:text-gray-900">Natural language commands</span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 ml-3 group-hover/item:text-gray-900">Context-aware responses</span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 ml-3 group-hover/item:text-gray-900">Full conversation history</span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 ml-3 group-hover/item:text-gray-900">Lightning fast responses</span>
                    </div>
                  </div>

                  <div className="mt-6 p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                    <p className="text-sm text-blue-900 font-semibold mb-1">Example:</p>
                    <p className="text-sm text-blue-700">"Add buy milk to my tasks"</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Manual Mode */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-2xl">
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-gray-600 to-gray-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg">
                  🎯 Manual Mode
                </div>
                
                <div className="mt-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-500 to-gray-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Traditional Controls</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Classic interface with buttons, forms, and visual controls. Perfect for detailed task management.
                  </p>
                  
                  <div className="space-y-3.5">
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 ml-3 group-hover/item:text-gray-900">Intuitive interface</span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 ml-3 group-hover/item:text-gray-900">Complete visual control</span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 ml-3 group-hover/item:text-gray-900">100% reliable fallback</span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 ml-3 group-hover/item:text-gray-900">Detailed task management</span>
                    </div>
                  </div>

                  <div className="mt-6 p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                    <p className="text-sm text-gray-900 font-semibold mb-1">Example:</p>
                    <p className="text-sm text-gray-700">Click "Add" → Fill form → Save</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reliability Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 shadow-lg">
              <Shield className="w-6 h-6 text-green-600 mr-3" />
              <span className="text-green-900 font-bold text-lg">
                AI unavailable? Manual mode always works—guaranteed reliability!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-5 py-2.5 bg-blue-100 rounded-full text-blue-700 text-sm font-bold mb-6 shadow-md">
              <Brain className="w-4 h-4 mr-2" />
              AI Workflow
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Three Simple Steps
              <span className="block bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent mt-2">
                To Task Mastery
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our AI-powered system makes task management effortless and intuitive.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border-2 border-blue-100 h-full group-hover:border-blue-300 transition-all shadow-lg group-hover:shadow-xl">
                <div className="absolute -top-5 -left-5 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                  1
                </div>
                <div className="mt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Type Naturally</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Chat like you're texting a friend. No commands to memorize—just natural conversation.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-gray-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-100 h-full group-hover:border-gray-300 transition-all shadow-lg group-hover:shadow-xl">
                <div className="absolute -top-5 -left-5 w-14 h-14 bg-gradient-to-br from-blue-600 to-gray-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                  2
                </div>
                <div className="mt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-gray-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Brain className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">AI Understands</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Advanced AI instantly comprehends your intent and prepares the perfect action.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-100 h-full group-hover:border-gray-300 transition-all shadow-lg group-hover:shadow-xl">
                <div className="absolute -top-5 -left-5 w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                  3
                </div>
                <div className="mt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Zap className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Action</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tasks updated in milliseconds with clear confirmation every time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-5 py-2.5 bg-blue-100 rounded-full text-blue-700 text-sm font-bold mb-6 shadow-md">
              <Star className="w-4 h-4 mr-2" />
              Powerful Features
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Everything You Need,
              <span className="block bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent mt-2">
                Nothing You Don't
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Built with cutting-edge technology to enhance your productivity and simplify task management.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200 rounded-full filter blur-3xl opacity-0 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered</h3>
                <p className="text-gray-600 leading-relaxed">
                  Advanced natural language processing understands your every command perfectly.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200 rounded-full filter blur-3xl opacity-0 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Conversational</h3>
                <p className="text-gray-600 leading-relaxed">
                  Natural conversations that feel human. No technical jargon or complex syntax.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-200 hover:border-gray-400">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-200 rounded-full filter blur-3xl opacity-0 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
                <p className="text-gray-600 leading-relaxed">
                  Blazing fast responses with real-time updates. Never wait for your tasks.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-200 hover:border-gray-400">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-200 rounded-full filter blur-3xl opacity-0 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Private</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bank-level encryption protects your data. Your privacy is our priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Natural Language Examples Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-5 py-2.5 bg-blue-100 rounded-full text-blue-700 text-sm font-bold mb-6 shadow-md">
              <MessageSquare className="w-4 h-4 mr-2" />
              Real Conversations
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Just Talk Naturally,
              <span className="block bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent mt-2">
                We Handle the Rest
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how simple conversations transform into completed tasks instantly.
            </p>
          </div>

          {/* Examples Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Example 1 */}
            <div className="group bg-white rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-all shadow-lg hover:shadow-xl">
              <div className="flex items-start space-x-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                  You
                </div>
                <div className="flex-1 bg-blue-50 p-4 rounded-xl shadow-sm border border-blue-200">
                  <p className="text-gray-800 font-semibold">"Add task buy groceries"</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 ml-13">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-300">
                  <p className="text-gray-700">✓ Added 'Buy groceries' to your tasks!</p>
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="group bg-white rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-all shadow-lg hover:shadow-xl">
              <div className="flex items-start space-x-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                  You
                </div>
                <div className="flex-1 bg-blue-50 p-4 rounded-xl shadow-sm border border-blue-200">
                  <p className="text-gray-800 font-semibold">"Show pending tasks"</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 ml-13">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-300">
                  <p className="text-gray-700">Here are your 3 pending tasks...</p>
                </div>
              </div>
            </div>

            {/* Example 3 */}
            <div className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-gray-400 transition-all shadow-lg hover:shadow-xl">
              <div className="flex items-start space-x-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                  You
                </div>
                <div className="flex-1 bg-blue-50 p-4 rounded-xl shadow-sm border border-blue-200">
                  <p className="text-gray-800 font-semibold">"Mark task 3 as done"</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 ml-13">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-300">
                  <p className="text-gray-700">✓ Marked 'Review reports' as completed!</p>
                </div>
              </div>
            </div>

            {/* Example 4 */}
            <div className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-gray-400 transition-all shadow-lg hover:shadow-xl">
              <div className="flex items-start space-x-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                  You
                </div>
                <div className="flex-1 bg-blue-50 p-4 rounded-xl shadow-sm border border-blue-200">
                  <p className="text-gray-800 font-semibold">"Delete meeting task"</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 ml-13">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-300">
                  <p className="text-gray-700">✓ Deleted 'Schedule meeting' successfully</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Note */}
          <div className="mt-12 text-center">
            <div className="inline-block p-6 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl border-2 border-blue-200 shadow-lg max-w-2xl">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold text-blue-700">No training required!</span> Our AI understands context and intent naturally—just chat like you're talking to a friend.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-5 py-2.5 bg-blue-500/20 backdrop-blur-xl rounded-full text-blue-200 text-sm font-bold mb-8 border border-blue-400/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Start Your Journey Today
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Ready to Transform
            <span className="block bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text text-transparent mt-2">
              Your Task Management?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands using both AI and manual modes. Free to start, powerful to scale.
          </p>
          
          <Link
            href="/register"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transform"
          >
            Get Started Free Now
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
          
          {/* Feature Pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="px-5 py-3 bg-white/10 backdrop-blur-xl rounded-full text-white text-sm font-semibold border border-white/20 shadow-lg">
              ✨ AI Assistant
            </div>
            <div className="px-5 py-3 bg-white/10 backdrop-blur-xl rounded-full text-white text-sm font-semibold border border-white/20 shadow-lg">
              🎯 Manual Controls
            </div>
            <div className="px-5 py-3 bg-white/10 backdrop-blur-xl rounded-full text-white text-sm font-semibold border border-white/20 shadow-lg">
              🔄 Switch Anytime
            </div>
            <div className="px-5 py-3 bg-white/10 backdrop-blur-xl rounded-full text-white text-sm font-semibold border border-white/20 shadow-lg">
              🔒 100% Secure
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations and grid pattern */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}
