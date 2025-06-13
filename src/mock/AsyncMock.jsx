const productos=[
    {
        id:'01',
        nombre:'Pc Core i7 Reacondicionado',
        descripcion:'Pc Intel Core i7 16Gb SSD 480Gb. Línea del procesador: Core i7. Marca: Intel. Disco Duro: 480 GB. RAM 16 GB. Windows 10. ',
        stock:5,
        precio:373000,
        categoria:'novedades',
        img:'../pc_Intel.png'
    },
    {
        id:'02',
        nombre:'Samsung Galaxy A15',
        descripcion:'Reacondicionado. Samsung Galaxy A15 128 GB 4 GB RAM. Pantalla 6.5. Cámaras: 50Mpx/5Mpx/2Mpx. Procesador MediaTek Helio G99 Octa-Core de 2.2GHz con 4GB de RAM. Batería: 5000mAh. Memoria interna:  128GB.',
        stock:3,
        precio:200000,
        categoria:'promociones',
        img:'../samsung_galaxy.png'
    },
     {
        id:'03',
        nombre:'Mouse Genius Nuevo',
        descripcion:'Mouse Genius Ergonómico Inalambrico Silencioso 8100s. Con sensor óptico. Resolución de 1600dpi.',
        stock:10,
        precio:15000,
        categoria:'mas solicitados',
        img:'../mouse_genius.png'
    },
    {
        id:'04',
        nombre:'Monitor LG Reacond.',
        descripcion:'Monitor LG. Pantalla de 20" 60Hz 220V y resolución HD. Es reclinable. Pantalla Led. Con resolución HD (1366 px x 768 px). Conexiones vga/d-sub.',
        stock:12,
        precio:18000,
        categoria:'mas solicitados',
        img:'../monitor_lg.png'
    },
    {
        id: '05',
        nombre: 'Auriculares Bluetooth JBL',
        descripcion: 'Auriculares inalámbricos JBL Tune 510BT. Sonido Pure Bass, hasta 40 horas de batería, conexión multipunto, diseño liviano y plegable.',
        stock: 8,
        precio: 32000,
        categoria: 'novedades',
        img: '../jbl_auriculares.png'
    },
    {
        id: '06',
        nombre: 'Notebook HP 14"',
        descripcion: 'Notebook HP 14" con procesador AMD Ryzen 5, 8GB RAM, SSD de 256GB. Windows 11. Ideal para estudio y oficina.',
        stock: 4,
        precio: 520000,
        categoria: 'promociones',
        img: '../notebook_hp.png'
    },
    {
        id: '07',
        nombre: 'Smart TV 32" Philips',
        descripcion: 'Smart TV Philips 32" HD con Android TV, WiFi integrado, HDMI/USB, control por voz, ideal para streaming.',
        stock: 6,
        precio: 145000,
        categoria: 'mas solicitados',
        img: '../smart_tv_philips.png'
    },
    {
        id: '08',
        nombre: 'Tablet Lenovo M10',
        descripcion: 'Tablet Lenovo M10 10.1" HD, 4GB RAM, 64GB almacenamiento. Android 11, ideal para multimedia y lectura.',
        stock: 9,
        precio: 95000,
        categoria: 'novedades',
        img: '../tablet_lenovo.png'
    },
    {
        id: '09',
        nombre: 'Impresora HP DeskJet 3775',
        descripcion: 'Impresora multifunción compacta HP DeskJet 3775. Imprime, copia y escanea. Con conectividad WiFi y compatible con HP Smart.',
        stock: 7,
        precio: 73000,
        categoria: 'promociones',
        img: '../impresora_hp.png'
    },
    {
        id: '10',
        nombre: 'Teclado Redragon K552',
        descripcion: 'Teclado mecánico gamer Redragon Kumara K552 RGB. Switches Outemu Blue, retroiluminado, ideal para gaming y productividad.',
        stock: 15,
        precio: 28000,
        categoria: 'mas solicitados',
        img: '../teclado_redragon.png'
    },
    {
        id: '11',
        nombre: 'Disco Externo WD 1TB',
        descripcion: 'Disco rígido portátil Western Digital 1TB USB 3.0. Ideal para backups, almacenamiento adicional y portabilidad.',
        stock: 5,
        precio: 85000,
        categoria: 'novedades',
        img: '../disco_externo_wd.png'
    },
    {
        id: '12',
        nombre: 'Cámara Web Logitech C270',
        descripcion: 'Cámara HD Logitech C270 con micrófono incorporado. Resolución 720p, ideal para videollamadas y clases online.',
        stock: 11,
        precio: 21000,
        categoria: 'promociones',
        img: '../logitech_c270.png'
    }
    
]


export const getProducts = () =>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error')
            }else{
                resolve(productos)
            }
        },1000)
    })
}

export const getOneProduct = (id) =>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error')
            }else{
                let product= productos.find((prod)=> prod.id === id)
                resolve(product)
            }
        },1000)
    })
}