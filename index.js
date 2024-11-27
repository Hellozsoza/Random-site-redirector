// List of URLs to redirect to
const sites = [
    "https://www.youtube.com/@Hellozsoza",
    "https://www.temu.com/hu/manual-pencil-sharpener-pencil-sharpener-pencil-sharpener-pen-sharpener-drawing-sketch-pencil-sharpener-manual-pencil-sharpener-for-daily-writing-g-601099539054285.html?_oak_mp_inf=EM39%2F6Om1ogBGiBiN2I3ZGVhYmRjY2U0NGJmYmJiMGNiZGJjYzNjNDc3MiC9sZn4tjI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2Fa8e52862b0ea1b3d242e75b12c1865df.jpg&spec_gallery_id=4071879390&refer_page_sn=10005&refer_source=0&freesia_scene=1&_oak_freesia_scene=1&_oak_rec_ext_1=MTY1NzAw&_oak_gallery_order=1405526148%2C697506949%2C1762273903%2C26748422%2C401954015&refer_page_el_sn=200024&refer_page_name=home&refer_page_id=10005_1732734384732_vcclmlonne&_x_sessn_id=rircnbdzt8",
    "https://www.temu.com/goods.html?_bg_fs=1&goods_id=601099604670241&sku_id=17592548312016&_oak_page_source=501&source_goods_id=&current_rec_strategy=&refer_page_name=home&refer_page_id=10005_1732734384732_vcclmlonne&refer_page_sn=10005&_x_sessn_id=rircnbdzt8",
    "https://www.temu.com/hu/-2db-zsebméretű-usb-memóriakártya-nagysebességű-kompakt-memóriakártyák-32gb-64gb-128gb-méretekben-laptop-külső-tárolásához-usb-memória-flash-drive-mini-usb-flash-drive-g-601099632059625.html?_oak_mp_inf=EOnJrNCm1ogBGiBiN2I3ZGVhYmRjY2U0NGJmYmJiMGNiZGJjYzNjNDc3MiC0jqf4tjI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fcc3c7eb5-94d6-4897-a4c7-b00cb3eefab5.jpg&spec_gallery_id=601099632059625&refer_page_sn=10005&refer_source=0&freesia_scene=1&_oak_freesia_scene=1&_oak_rec_ext_1=NDY5MDAw&_oak_gallery_order=1772266491%2C1647220124%2C621468089%2C340005886%2C1241056132&refer_page_el_sn=200024&refer_page_name=home&refer_page_id=10005_1732734384732_vcclmlonne&_x_sessn_id=rircnbdzt8",
    "https://www.temu.com/hu/-eva-storage-bag-protective-case-for-gaming-devices--and-accessories-waterproof-shockproof-dustproof-anti-drop--anti--g-601099602111946.html?_oak_mp_inf=EMrbiMKm1ogBGiBiN2I3ZGVhYmRjY2U0NGJmYmJiMGNiZGJjYzNjNDc3MiDSjqf4tjI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F2024-06-28%2F1719561347413-7d37be8d177c4aa1a12dd4d6599ed348-goods.jpeg&spec_gallery_id=4255925231&refer_page_sn=10005&refer_source=0&freesia_scene=1&_oak_freesia_scene=1&_oak_rec_ext_1=NjUwMDA&_oak_gallery_order=2060471170%2C124821209%2C28215171%2C826060855%2C5685833&refer_page_el_sn=200024&refer_page_name=home&refer_page_id=10005_1732734384732_vcclmlonne&_x_sessn_id=rircnbdzt8",
    "https://www.alza.hu/gigabyte-geforce-rtx-4060-windforce-oc-8g-d7805974.htm?kampan=adw1_komponenty_pla_all_obecna_komponenty-all_c_9107329_EGr4060w2"
];

// Function to redirect to a random site
const randomIndex = Math.floor(Math.random() * sites.length);
window.location.href = sites[randomIndex];

// Event listener for the button
//document.getElementById("redirect-btn").addEventListener("click", redirectToRandomSite);
