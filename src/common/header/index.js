/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const Header = () => {
  return (
    <div className='relative h-14 border-b border-solid border-gray-200'>
      <a href='/' className='absolute top-0 left-0 block w-24 h-14 bg-jianshu-logo bg-contain' />
      <div className='h-full w-240 box-border my-0 mx-auto'>
        <div className='leading-14 py-0 px-4 text-gray-800 text-lg float-left active'>首页</div>
        <div className='leading-14 py-0 px-4 text-gray-800 text-lg float-left'>下载App</div>
        <div className='leading-14 py-0 px-4 text-lg float-right text-gray-500'>登录</div>
        <div className='leading-14 py-0 px-4 text-lg float-right text-gray-500'>
          <i className='iconfont'>&#xe607;</i>
        </div>
        <input placeholder='搜索' className='placeholder-gray-400::placeholder w-40 h-10 py-0 px-5 mt-2 ml-6 box-border border-none outline-none rounded-3xl bg-gray-100 text-sm' />
      </div>
      <div className='absolute right-0 top-0 h-16'>
        <button className='float-right mt-2 leading-9 rounded-2xl border border-solid border-red-400 mr-6 py-0 px-6 text-sm text-white bg-red-500'>写文章</button>
        <button className='float-right mt-2 leading-9 rounded-2xl border border-solid border-red-400 mr-6 py-0 px-6 text-sm text-red-400'>注册</button>
      </div>
    </div>
  )
}

export default Header;