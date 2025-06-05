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
        categoria:'mas vendidos',
        img:'../monitor_lg.png'
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
        },3000)
    })
}