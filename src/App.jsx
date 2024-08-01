import Header from './components/Header'
import Footer from './components/Footer'
import ConInput from './components/ConInput'
import Wave_BG from './components/Wave_BG'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className='relative'>
        <div className="absolute inset-0 z-0">
          <Wave_BG />
        </div>
        <div className="relative z-10">
          <ConInput />
        </div>
      </div>
      <div className='container max-w-full' style={{ backgroundColor: '#fbf9ff' }}>
        <div className="container max-w-full p-10 text-center animate__animated animate__fadeInLeftBig">
          <h1 className='text-3xl font-bold text-center pb-5' style={{ color: '#260B64' }}>Classification คืออะไร?</h1>
          <p className='text-lg 2xs:px-0 xs:px-16 md:px-40 lg:px-52  xl: px-64 2xl:px-64' style={{ color: '#260B64' }}>การจัดกลุ่มหรือแยกสิ่งต่าง ๆ เช่น การแยกชนิดของผลไม้หรือสัตว์ เป็นกระบวนการที่ใช้คุณสมบัติของสิ่งเหล่านั้น เช่น รูปร่าง สี หรือลักษณะภายนอก มาแบ่งแยกออกเป็นประเภทที่เรากำหนดไว้ล่วงหน้า โดยใช้วิธีทางสถิติหรือเทคโนโลยีการเรียนรู้ของเครื่อง (Machine Learning) ซึ่งช่วยในการทำนายหรือคาดการณ์ว่าข้อมูลใหม่จะเข้ากับกลุ่มไหนได้อย่างถูกต้องและแม่นยำ โดยใช้โมเดลทางสถิติหรือโมเดลการเรียนรู้ของเครื่อง (Machine Learning) เพื่อทำการคาดการณ์หรือทำนายว่าข้อมูลใหม่จะเข้ากับกลุ่มใด</p>
        </div>
      </div>
      <div className="container max-w-full py-14">
        <div className="container max-w-full p-10 text-center animate__animated animate__fadeInRightBig">
          <h1 className='text-3xl font-bold text-center pb-5' style={{ color: '#260B64' }}>การนำไปใช้</h1>
          <p className='text-lg 2xs:px-0 xs:px-16 md:px-40 lg:px-52  xl: px-64 2xl:px-64' style={{ color: '#260B64' }}>การจัดกลุ่มหรือแยกประเภทใช้ในชีวิตประจำวัน เช่น ระบบวินิจฉัยโรคที่ช่วยแพทย์แยกชนิดของโรค การกรองอีเมลที่ช่วยแยกสแปมหรือไม่ต้องการ การแนะนำสินค้าตามประวัติการค้นหา การจัดการภาพถ่ายให้แยกตามประเภท และการรักษาความปลอดภัยด้วยการจดจำใบหน้า</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
