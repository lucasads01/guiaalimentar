const PXA_load_start_1_2_8=async()=>{if(window.PXA_load){return}
window.PXA_load=!0;if(typeof window.pixel_x_app==='object'||window.hasOwnProperty('pixel_x_app')){return}
async function initPixelXApp(){const pxa_start={domain:'clubeescola.online',api_event:'https://clubeescola.online/wp-json/pixel-x-app/v1/event',api_lead:'https://clubeescola.online/wp-json/pixel-x-app/v1/lead',phone_country:''||undefined,phone_valid:''||!1,phone_update:''||!1,web_priority:''||!1,fb_js:'https://clubeescola.online/wp-content/plugins/pixel-x-app/assets/js/pxa-fb.js?version=1.2.8',fb_pixels:'486470360682716,946288397455671',page_id:'784'||document.currentScript?.getAttribute('data-page-id'),page_title:'Super Combo Escolar 25'||document.currentScript?.getAttribute('data-page-name'),input_custom_name:''||undefined,input_custom_email:''||undefined,input_custom_phone:''||undefined,};window.pixel_x_app=new PixelXApp();await window.pixel_x_app.start(pxa_start).catch((error)=>{console.error('Erro ao iniciar PixelXApp:',error)});await window.pixel_x_app.parameters_load();const PXA_click_2481=async()=>{document.querySelectorAll('.gtmGpOyINhkRWBVncMeM, #gtmGpOyINhkRWBVncMeM').forEach(function(el){el.addEventListener('click',async()=>{await window.pixel_x_app.send_event({event_id:'64bc75fc-0725-4548-82f6-cef0283e8a4e',event_name:'InitiateCheckout',page_id:'784',page_title:'Super Combo Escolar 25',product_id:'UDKTJw',product_name:'Super Combo Escolar 2025',product_value:'37.00',content_ids:'UDKTJw',currency:'BRL',})})})}
await PXA_click_2481();await window.pixel_x_app.elementor_function(PXA_click_2481);const PXA_click_1244=async()=>{document.querySelectorAll('.ZpRrQtTVsOSIMMAqPLQc, #ZpRrQtTVsOSIMMAqPLQc').forEach(function(el){el.addEventListener('click',async()=>{await window.pixel_x_app.send_event({event_id:'2d159bfd-1c5f-4166-8d39-27746945c4fe',event_name:'InitiateCheckout',page_id:'784',page_title:'Super Combo Escolar 25',product_id:'UDKTJw',product_name:'Super Combo Escolar 2025',product_value:'37.00',content_ids:'UDKTJw',currency:'BRL',})})})}
await PXA_click_1244();await window.pixel_x_app.elementor_function(PXA_click_1244);const PXA_click_1241=async()=>{document.querySelectorAll('.pDlazJhItIqJLziyUGMe, #pDlazJhItIqJLziyUGMe').forEach(function(el){el.addEventListener('click',async()=>{await window.pixel_x_app.send_event({event_id:'9a2c9fe4-7a76-4389-859e-8e862c2924eb',event_name:'AddToCart',page_id:'784',page_title:'Super Combo Escolar 25',product_id:'UDKTJw',product_name:'Super Combo Escolar 2025',product_value:'37.00',content_ids:'UDKTJw',currency:'BRL',})})})}
await PXA_click_1241();await window.pixel_x_app.elementor_function(PXA_click_1241);await window.pixel_x_app.send_event({event_id:'a0ce8233-0688-403e-9014-d1e18c848dbb',fb_pixels:'486470360682716',event_name:'PageView',page_id:'784',page_title:'Super Combo Escolar 25',product_id:'UDKTJw',product_name:'Super Combo Escolar 2025',product_value:'37.00',content_ids:'UDKTJw',currency:'BRL',})}
if(typeof PixelXApp==='undefined'){const script=document.createElement('script');script.src='https://clubeescola.online/wp-content/plugins/pixel-x-app/assets/js/pxa-base.min.js?version=1.2.8';script.onload=async()=>{await initPixelXApp()};document.head.appendChild(script)}else{await initPixelXApp()}}
window.PXA_load=!1;document.addEventListener('DOMContentLoaded',async()=>{await PXA_load_start_1_2_8()},!1);document.addEventListener('load',async()=>{await PXA_load_start_1_2_8()},!1);setTimeout(async()=>{await PXA_load_start_1_2_8()},1000)