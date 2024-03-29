interface IProps {
  className?: string
  fill?: string
}

function Facebookicon1({ className, fill }: IProps) {
  return (
    <svg className={className} fill={fill} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 17'>
      <path
        fill=''
        d='M5.56341 16.8197V8.65888H7.81615L8.11468 5.84663H5.56341L5.56724 4.43907C5.56724 3.70559 5.63693 3.31257 6.69042 3.31257H8.09873V0.5H5.84568C3.1394 0.5 2.18686 1.86425 2.18686 4.15848V5.84695H0.499939V8.6592H2.18686V16.8197H5.56341Z'
      />
    </svg>
  )
}

export default Facebookicon1
