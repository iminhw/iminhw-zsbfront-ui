/* This example requires Tailwind CSS v2.0+ */
import { Fragment, React, useState, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {Link} from 'react-router-dom';
import {
  BookmarkAltIcon,
  CalendarIcon,
  // ChartBarIcon,
  // CursorClickIcon,
  MenuIcon,
  // PhoneIcon,
  // PlayIcon,
  // RefreshIcon,
  // ShieldCheckIcon,
  SupportIcon,
  // ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import logo from '@/images/favicon.png'
// const solutions = [
//   {
//     name: '分析',
//     description: '更好的了解您的交通来自哪里。',
//     href: '#',
//     icon: ChartBarIcon,
//   },
//   {
//     name: '约谈',
//     description: '以更有意义的方式直接与客户交谈',
//     href: '#',
//     icon: CursorClickIcon,
//   },
//   { name: '安全', description: "客户的数据是安全可靠的。", href: '#', icon: ShieldCheckIcon },
//   {
//     name: '集成',
//     description: "联军您需要使用的第三方工具",
//     href: '#',
//     icon: ViewGridIcon,
//   },
//   {
//     name: '自动化',
//     description: '建立战斗策略，推动您的客户转换。',
//     href: '#',
//     icon: RefreshIcon,
//   },
// ]
// const callsToAction = [
//   { name: '观看演示', href: '#', icon: PlayIcon },
//   { name: '联系销售', href: '#', icon: PhoneIcon },
// ]
const resources = [
  {
    name: '帮助中心',
    description: '在没有充斥推销信息的QQ群里面寻求帮助',
    href: 'https://qm.qq.com/cgi-bin/qm/qr?k=grSiTcUS11M8PWdL40cgb0jHmrrF1ESQ&jump_from=webapi',
    icon: SupportIcon,
  },
  {
    name: '使用指南',
    description: '点击入群查看详细使用方案',
    href: 'https://qm.qq.com/cgi-bin/qm/qr?k=grSiTcUS11M8PWdL40cgb0jHmrrF1ESQ&jump_from=webapi',
    icon: BookmarkAltIcon,
  },
  {
    name: 'BUG反馈',
    description: '点击入群向开发者反馈您碰到的问题',
    href: 'https://qm.qq.com/cgi-bin/qm/qr?k=grSiTcUS11M8PWdL40cgb0jHmrrF1ESQ&jump_from=webapi',
    icon: CalendarIcon,
  },
  // { name: '安全', description: '我们将您的隐私加密处理.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: '2022年成都航空职业技术学院录取与通知书邮寄进度查询', href: 'https://www.cap.edu.cn/campus/jgsz/gljg/dzqbm/zsb2022/zsbzsdt/202207/t20220711_132960.html' },
  { id: 2, name: '成都航空职业技术学院2022年报考指南', href: 'https://www.cap.edu.cn/campus/jgsz/gljg/dzqbm/zsb2022/zsbzsdt/202206/t20220606_131830.html' },
  { id: 3, name: '我在这里等你，共赴一场成航之约！', href: 'https://mp.weixin.qq.com/s/zBKwz39MOiItPH7IXSJFgw' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Headers() {

    const [top, setTop] = useState(true);

    // detect whether user has scrolled the page down by 10px
    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

  return (
    <Popover
    className={`bg-white fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
            
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">成航招生办公室</span>
              <img
                className="w-auto h-8 sm:h-10"
                src={logo}
                alt="成航招生办公室"
              />
              {/* 成航招生办公室 */}
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
             {/* <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span>解决方案</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 w-6 h-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 space-y-6 bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                              >
                                <item.icon className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div> 
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>  */}
            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              首页
            </Link>
            <Link to="/matriculate" className="text-base font-medium text-gray-500 hover:text-gray-900">
              录取查询
            </Link>
            <Link to="/advice" className="text-base font-medium text-gray-500 hover:text-gray-900">
              通知书单号查询
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span>更多</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a 
                              key={item.name}
                              href={item.href}
                              className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 w-6 h-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        {/* <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">最近的帖子</h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li key={post.id} className="text-base truncate">
                                  <a target="_blank" href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a target="_blank"  href="https://www.cap.edu.cn/campus/jgsz/gljg/dzqbm/zsb2022/zsbzsdt/" className="font-medium text-indigo-600 hover:text-indigo-500">
                              {' '}
                              查看所有的帖子 <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            {/* <a href="#" className="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900">
              登 陆
            </a> */}
            {/* <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700"
            >
              注 册
            </a> */}
            <a target="_blank" 
              href="https://www.cap.edu.cn/campus/jgsz/gljg/dzqbm/zsb2022/"
              className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700"
            >
              招生官网
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="w-auto h-8"
                    src={logo}
                    alt="成航招生办公室"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              {/* <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 w-6 h-6 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div> */}
            </div>
            <div className="px-5 py-6 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                
                <Link to="/matriculate" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  录取查询
                </Link>

                <Link to="/advice" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  通知书单号查询
                </Link>
                {resources.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
              <a target="_blank" 
                  href="https://www.cap.edu.cn/campus/jgsz/gljg/dzqbm/zsb2022/"
                  className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                >
                  招生官网
                </a>
                {/* <a
                  href="#"
                  className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                >
                  登 陆
                </a>
                <p className="mt-6 text-base font-medium text-center text-gray-500">
                  没有账号？{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    注 册
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
