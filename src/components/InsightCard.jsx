import React from 'react'

const colors = [
   "#004AC6", 
   "#943700",
   "#495C95",
   "#004AC6", 
   "#943700",
   "#495C95",
   "#004AC6", 
   "#943700",
   "#495C95",
   "#004AC6", 
   "#943700",
   "#495C95",
]

const InsightCard = ({ title = "growth driver" , description, index, CostumeWidth = "234px" }) => {
  const color = colors[index];
  return (
    <div className={` min-h-26 p-5 bg-white rounded-lg flex flex-col border-l-4  gap-[7px] `}
        style={{ borderLeftColor : color , width : CostumeWidth }}
    >
      <p className={`text-[12px] capitalized font-bold`}
        style={{ color : color }}
      >
        {title}
      </p>
      <p className={`text-[14px] leading-5 text-[#191C1E]`}>
        {description}
      </p>
    </div>
  )
}

export default InsightCard
