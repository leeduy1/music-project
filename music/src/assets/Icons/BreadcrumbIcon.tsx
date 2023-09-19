interface IProps {
  className?: string
  fill?: string
}

function BreadcrumbIcon({ className, fill }: IProps) {
  return (
    <svg className={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#c0c0c0" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/></svg>
  )
}

export default BreadcrumbIcon
