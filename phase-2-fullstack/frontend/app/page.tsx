'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle, Zap, Shield, Smartphone, ArrowRight, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Modern Blue/Gray Design */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-24 sm:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-5 py-2.5 bg-blue-500/20 backdrop-blur-xl rounded-full text-blue-100 text-sm font-semibold mb-8 border border-blue-400/30 shadow-lg">
                <Sparkles className="w-4 h-4 mr-2 text-blue-300" />
                Welcome to the Future of Task Management
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                Organize Your
                <span className="block mt-2 bg-gradient-to-r from-blue-300 via-blue-200 to-gray-200 bg-clip-text text-transparent">
                  Life Smarter
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Transform chaos into clarity. Manage tasks, boost productivity, and achieve your goals with our beautiful, intuitive platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/register"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 border border-blue-500/50"
                >
                  Start Free Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gray-700/50 backdrop-blur-xl rounded-xl hover:bg-gray-600/50 transition-all duration-300 border border-gray-500/50 shadow-xl hover:shadow-gray-500/30"
                >
                  Sign In
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-14 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">10K+</div>
                  <div className="text-gray-400 text-sm font-medium mt-1">Active Users</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">50K+</div>
                  <div className="text-gray-400 text-sm font-medium mt-1">Tasks Completed</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">99.9%</div>
                  <div className="text-gray-400 text-sm font-medium mt-1">Uptime</div>
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Task Card */}
            <div className="relative lg:block hidden">
              <div className="relative">
                {/* Floating Card */}
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-200/50 transform hover:scale-105 transition-all duration-500 hover:shadow-blue-500/20">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-gray-800 bg-clip-text text-transparent">Today's Tasks</h3>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                      3 tasks
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Task Item 1 - Completed */}
                    <div className="group flex items-start p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div className="flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="text-gray-500 font-semibold line-through">Complete project proposal</p>
                        <p className="text-sm text-gray-400 mt-1.5 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          Finished 2 hours ago
                        </p>
                      </div>
                    </div>

                    {/* Task Item 2 - High Priority */}
                    <div className="group flex items-start p-5 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl border-2 border-blue-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 cursor-pointer">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-6 h-6 rounded-full border-3 border-blue-600 group-hover:bg-blue-100 transition-colors"></div>
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="text-gray-900 font-semibold">Schedule team meeting</p>
                        <p className="text-sm text-gray-600 mt-1.5 flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          Due in 3 hours
                        </p>
                      </div>
                      <span className="ml-2 px-3 py-1 bg-blue-600 text-white text-xs rounded-full font-bold shadow-sm">High</span>
                    </div>

                    {/* Task Item 3 - Medium Priority */}
                    <div className="group flex items-start p-5 bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-2xl border-2 border-gray-300 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-6 h-6 rounded-full border-3 border-gray-400 group-hover:bg-gray-100 transition-colors"></div>
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="text-gray-900 font-semibold">Review quarterly reports</p>
                        <p className="text-sm text-gray-600 mt-1.5 flex items-center">
                          <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                          Due tomorrow
                        </p>
                      </div>
                      <span className="ml-2 px-3 py-1 bg-gray-600 text-white text-xs rounded-full font-bold shadow-sm">Medium</span>
                    </div>
                  </div>

                  {/* Add Task Button */}
                  <button className="mt-6 w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-500/50">
                    + Add New Task
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400 rounded-full filter blur-3xl opacity-30"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-400 rounded-full filter blur-3xl opacity-30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb"/>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-5 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-bold mb-6 shadow-sm border border-blue-200">
              ✨ Powerful Features
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Everything You Need to
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-700 to-gray-700 bg-clip-text text-transparent">
                Stay Organized
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Powerful features designed to help you manage tasks efficiently and boost your productivity.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 - Blue */}
            <div className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-200 hover:border-blue-400">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200 rounded-full filter blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Task Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create, organize, and prioritize tasks with our intuitive interface. Set deadlines and never miss important tasks.
                </p>
              </div>
            </div>

            {/* Feature 2 - Gray/Blue */}
            <div className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-200 hover:border-gray-400">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-300 rounded-full filter blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Private</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your data is protected with enterprise-grade security. We never share your information with anyone.
                </p>
              </div>
            </div>

            {/* Feature 3 - Blue Accent */}
            <div className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-200 hover:border-blue-400">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-300 rounded-full filter blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Works Everywhere</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access your tasks from any device. Fully responsive design that works perfectly on mobile, tablet, and desktop.
                </p>
              </div>
            </div>

            {/* Feature 4 - Gray Accent */}
            <div className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-200 hover:border-gray-400">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-300 rounded-full filter blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experience instant updates and seamless performance. Built with modern technology for maximum speed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of users who are already managing their tasks smarter. Start your journey today!
          </p>
          <Link
            href="/register"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 border border-blue-500/50"
          >
            Create Free Account
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Custom CSS for animations */}
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
      `}</style>
    </div>
  );
}