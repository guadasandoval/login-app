'use client'
import Image from 'next/image';
import loadImg from "../../public/assets/static/loadImage.svg"
import logo from '../../public/assets/static/logo.svg'
import eyepsw from '../../public/assets/static/eyepsw.svg'
import agente from "../../public/assets/static/inicia-sesión-agente 2.png"
import { useState } from 'react';


export default function Home() {
    const [selectedFile, setSelectedFile] = useState<any>('');
    const [formData, setFormData] = useState({
      fullName: '',
      phone:'',
      email: '',
      urlProfileImg:'',
      password:''
    });
  
    const handleChange = (e: any) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
    
    const handleFileChange = (event : any) => {
        const file = event.target.files[0];
        setSelectedFile(file);
      };
    
      const handleSubmit = (e: any) => {
      e.preventDefault();
      if (!formData.fullName || !formData.email || !formData.password || !formData.phone) {
        alert('Por favor, completa todos los campos.');
        return;
      }
      if (formData.fullName.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        alert('Por favor, ingresa un nombre y un correo electrónico válido.');
        return;
      }
      if (selectedFile) {
        const formDataObject = { 
        fullName: '',
        phone:'',
        email: '',
        urlProfileImg:'',
        password:''};

      formDataObject.fullName = formData.fullName;
      formDataObject.phone = formData.phone;
      formDataObject.email = formData.email;
      formDataObject.urlProfileImg = selectedFile.name;
      formDataObject.password = formData.password;
      setFormData(formDataObject)
      alert("Felicitaciones! Ya sos un agente Flexy")
    }
    };
  

  return (
    <main className="flex min-h-screen flex-col items-row justify-between bg-white box-border">
  <div className="flex min-h-full flex-row justify-between">
    <div className="flex w-1/2 flex-col  justify-items-stretch">
    <header className="flex w-full flex-col justify-stretch">
    <div id="logo">
      <Image src={logo} alt="logo de la aplicacion Flexy" width={134} className="my-7"></Image>
        <hr className='text-gray-500'/>
      </div> 
    </header>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-left text-3xl font-bold leading-9 tracking-tight text-gray-900">¡Bienvenido!</h2>
      <p className="text-gray-500 text-base">Convertite ahora en un agente Flexy.</p>
    </div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleSubmit}> 
       <div className=" flex mt-5 items-center">
        <div className="flex justify-center items-center rounded-full bg-indigo-50 w-12 h-12">
          <input type='file' className='opacity-0 z-0 absolute  cursor-pointer' onChange={handleFileChange}/>
          <Image className='opacity-50 z-50' src={loadImg} alt="" width={20}></Image>
        </div> 
        {selectedFile ? (
            <div>
              <p>{selectedFile.name}</p>
            </div>
          ) : (<p className="text-gray-900 text-base ml-2">Subí tu foto de perfil</p>)
          }
      </div>
        <div>
          <div className="mt-6">
            <input id="fullName" name="fullName" type="text" required placeholder="Nombre y Apellido" 
            value={formData.fullName} onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 bg-indigo-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"/>
          </div>
          <div className="mt-6">
            <input id="phone" name="phone" type="text" required placeholder="+54 01 0200 000" 
             value={formData.phone} onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 bg-indigo-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"/>
          </div>
          <div className="mt-6">
            <input id="email" name="email" type="email" required placeholder="hola@tuemail.com" 
             value={formData.email} onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 bg-indigo-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"/>
          </div>
          <div className="mt-6">
            <div className='flex items-center'>
               <input id="password" name="password" type="password" minLength={8} required placeholder="Ingresá tu contraseña"
             value={formData.password} onChange={handleChange} 
            className="block w-full rounded-md border-0 py-1.5 pl-4 z-0 text-gray-900 bg-indigo-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"/>
            {/* <Image src={eyepsw} alt="" width={10} className='z-10'></Image> */}
            </div>
            <p className="text-center text-gray-500 text-sm mt-3">Debe tener al menos 8 caracteres.</p>
          </div>
        </div>
        
        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrate</button>
        </div>
      </form>
      <p className="mt-10 text-center text-sm text-gray-500">
      ¿Ya tenés una cuenta?
        <a href="#" className="font-semibold leading-6 text-gray-900 hover:text-indigo-500"> Iniciá sesión</a>
      </p>
    </div>
    </div>
    <Image className="w-2/3" src={agente} alt="" width={845} ></Image>
  </div>
</main>
  )
}
