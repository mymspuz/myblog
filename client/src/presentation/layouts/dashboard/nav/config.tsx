import { SvgColor } from 'presentation/components'

const icon = (name: string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />

const navConfig = [
    {item: {
            title: 'dashboard',
            path: '/dashboard/app',
            icon: icon('ic_analytics')
        }
    },
    {item: {
            title: 'user',
            path: '/dashboard/user',
            icon: icon('ic_user')
        }
    },
    {item: {
            title: 'product',
            path: '/dashboard/products',
            icon: icon('ic_cart')
        }
    },
    {item: {
            title: 'blog',
            path: '/dashboard/blog',
            icon: icon('ic_blog')
        }
    },
    {item: {
            title: 'login',
            path: '/login',
            icon: icon('ic_lock')
        }
    },
    {item: {
            title: 'Not found',
            path: '/404',
            icon: icon('ic_disabled')
        }
    }
]

export default navConfig