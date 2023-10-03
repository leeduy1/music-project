interface IProps {
  className?: string
  fill?: string
}

function ProfileAvatar({ className, fill }: IProps) {
  return (
    <svg className={className} fill={fill} width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" fill="#ffffff"/>
    <path d="M23.71 20.71C24.6904 19.9387 25.406 18.8809 25.7572 17.6839C26.1085 16.487 26.0779 15.2103 25.6698 14.0315C25.2617 12.8527 24.4963 11.8304 23.4801 11.1069C22.4639 10.3833 21.2474 9.99451 20 9.99451C18.7525 9.99451 17.5361 10.3833 16.5199 11.1069C15.5037 11.8304 14.7383 12.8527 14.3302 14.0315C13.9221 15.2103 13.8915 16.487 14.2428 17.6839C14.594 18.8809 15.3096 19.9387 16.29 20.71C14.6101 21.383 13.1443 22.4994 12.0489 23.9399C10.9535 25.3805 10.2696 27.0913 10.07 28.89C10.0556 29.0213 10.0671 29.1542 10.104 29.2811C10.1409 29.4079 10.2025 29.5263 10.2851 29.6293C10.452 29.8375 10.6948 29.9708 10.96 30C11.2252 30.0292 11.4912 29.9518 11.6993 29.7849C11.9075 29.618 12.0408 29.3752 12.07 29.11C12.2896 27.1552 13.2217 25.3498 14.6882 24.0388C16.1547 22.7278 18.0529 22.003 20.02 22.003C21.9871 22.003 23.8852 22.7278 25.3518 24.0388C26.8183 25.3498 27.7504 27.1552 27.97 29.11C27.9972 29.3557 28.1144 29.5827 28.2991 29.747C28.4838 29.9114 28.7228 30.0015 28.97 30H29.08C29.3421 29.9698 29.5817 29.8373 29.7466 29.6313C29.9114 29.4252 29.9881 29.1624 29.96 28.9C29.7595 27.0962 29.0719 25.381 27.9708 23.9382C26.8698 22.4954 25.3969 21.3795 23.71 20.71V20.71ZM20 20C19.2089 20 18.4355 19.7654 17.7777 19.3259C17.1199 18.8864 16.6072 18.2616 16.3045 17.5307C16.0017 16.7998 15.9225 15.9956 16.0769 15.2196C16.2312 14.4437 16.6122 13.731 17.1716 13.1716C17.731 12.6122 18.4437 12.2312 19.2196 12.0769C19.9956 11.9225 20.7998 12.0017 21.5307 12.3045C22.2616 12.6072 22.8863 13.1199 23.3259 13.7777C23.7654 14.4355 24 15.2089 24 16C24 17.0609 23.5786 18.0783 22.8284 18.8284C22.0783 19.5786 21.0609 20 20 20Z" fill="#16151a"/></svg>
  )
}

export default ProfileAvatar