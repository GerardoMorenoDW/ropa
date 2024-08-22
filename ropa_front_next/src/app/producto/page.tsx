import Image from "next/image"

export default function Page() {
    return (
    
    <>
    <h1>DETALLES DEL PRODUCTOS</h1>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            width={500}
            height={800}
            priority
            src="/tshirt.jpeg"
            alt="tshirt Hiit"
          >
        </Image>
      </div>
      <div>
        <div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div className="flex flex-row space-x-4">

          <button className="bg-blue-500 active:bg-blue-600 p-4">
            XL
          </button>
          <button className="bg-blue-500 active:bg-blue-600 p-4">
            L
          </button>
          <button className="bg-blue-500 active:bg-blue-600 p-4">
            M
          </button>
          <button className="bg-blue-500 active:bg-blue-600 p-4">
            S
          </button>
        </div>
      </div>
    </div>
    </>
    
    
  
  )
  }