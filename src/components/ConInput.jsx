import React from 'react'

function ConInput() {
  return (
    <div className="container max-w-full flex justify-center py-10 animate__animated animate__fadeInUp">
    <div className="container bg-white shadow-lg text-center rounded-xl p-12 mx-auto">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-3xl font-bold">เลือกรูปภาพ</h1>
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
        <button className="btn" style={{ backgroundColor: '#7F37B4', color: 'white' }}> <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
          <path fill-rule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z" clip-rule="evenodd" />
        </svg>
          วิเคราะห์รูป</button>
      </div>
    </div>
  </div>
  )
}

export default ConInput