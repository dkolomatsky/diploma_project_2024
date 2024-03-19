const products = [
  // unit 1 tablet
  {
    type: "Tablet",
    brand: "Samsung",
    model: "Samsung Galaxy Tab S9",
    memory: "8GB",
    description:
      "Tablet - display: 11, QHD 2560 × 1600 AMOLED, Qualcomm Snapdragon 8 Gen 2 2,8 GHz, RAM: 8GB, internal memory: 256GB + memory card up to 1024GB, webcamera 13Mpx+ 12Mpx, weight: 498, USB-C, Android 13",
    photo: "assets/img/Samsung-Galaxy_TABs9.png",
    price: 499,
    color: "Black",
  },
  // unit 2 laptop
  {
    type: "Laptop",
    brand: "Huawei",
    model: "HUAWEI MateBook 16s",
    memory: "16GB",
    description:
      "Operating system Windows 11 Home Size Width 351 mm... Screen Size 16 inches... 13th Gen Intel® Core™ i9-13900H processor 13th Gen Intel® Core™ i7-13700H processor Intel® Iris® Xᵉ Graphics. Memory 16 GB 1 TB SSD NVMe PCIe storage. ...",
    photo: "assets/img/huaweiMateBook16s.png",
    price: 1499,
    color: "Grey",
  },
  // unit 3 laptop
  {
    type: "Laptop",
    brand: "Lenovo",
    model: "Lenovo ThinkPad P1 Gen 6 Black",
    memory: "16GB",
    description:
      "Laptop - Intel Core i9 13900H Raptor Lake, 16 IPS anti-glare 2560 × 1600 165 Hz, RAM 16GB DDR5, NVIDIA Quadro RTX 2000 8GB, SSD 1000GB, backlit keyboard, webcam, USB 3.2 Gen 1, fingerprint reader, Windows 11 Pro",
    photo: "assets/img/lenovoThinkPad.png",
    price: 999,
    color: "Black",
  },
  // unit 4 tablet
  {
    type: "Tablet",
    brand: "Lenovo",
    model: "Lenovo Tab M11 LTE",
    memory: "4GB",
    description:
      "Tablet - display: 11, 1920 × 1200 IPS, MediaTek Helio G88 2 GHz, RAM: 4GB, internal memory: 128GB + memory card up to 1024GB, 4G/LTE, webcamera 8Mpx+ 8Mpx, weight: 465, USB-C, Android 13",
    photo: "assets/img/lenovoTABm11.png",
    price: 529,
    color: "Black",
  },
  // unit 5 tablet
  {
    type: "Tablet",
    brand: "Lenovo",
    model: "Lenovo Tab P12",
    memory: "8GB",
    description:
      "Tablet, MediaTek Dimensity 7050 processor, 12.7 3K display (2944x1840), RAM 8GB, memory 128GB, memory card slot, front/rear camera 13 MPx /8 MPx, BT 5.1, Wifi AX, GPS, OS Android 13",
    photo: "assets/img/LenovoTabP12.png",
    price: 699,
    color: "Orange",
  },
  // unit 6 laptop
  {
    type: "Laptop",
    brand: "Huawei",
    model: "Huawei MateBook D15",
    memory: "8GB",
    description:
      "Laptop - Intel Core i5 1135G7 Tiger Lake, 15.6 IPS anti-glare 1920 × 1080, RAM 8GB DDR4, Intel Iris Xe Graphics, SSD 512GB, webcam, USB 3.2 Gen 1, USB-C, fingerprint reader, WiFi 802.11ac, 3-cell battery, Windows 11 Home",
    photo: "assets/img/huaweiMateBook16s.png",
    price: 1199,
    color: "Silver",
  },
  // unit 7 laptop
  {
    type: "Laptop",
    brand: "Lenovo",
    model: "Lenovo IdeaPad Slim 5",
    memory: "16GB",
    description:
      "Laptop - Intel Core i7 13620H Raptor Lake, 16 IPS anti-glare 1920 × 1200, RAM 16GB LPDDR5, Intel UHD Graphics, SSD 512GB, numeric keypad, backlit keyboard, webcam, USB 3.2 Gen 1, USB-C, 3-cell battery, without Operating System",
    photo: "assets/img/LenovoIdeaPadSlim5.png",
    price: 2499,
    color: "Black",
  },
  // unit 8 laptop
  {
    type: "Laptop",
    brand: "Apple",
    model: "Macbook Air 13 M1",
    memory: "4GB",
    description:
      "MacBook - Apple M1, 13.3 IPS glossy 2560 × 1600, RAM 8GB, Apple M1 7-core GPU, SSD 256GB, backlit keyboard, webcam, USB-C, fingerprint reader, WiFi 802.11ac, macOS",
    photo: "assets/img/MacbookAir13M1.png",
    price: 1499,
    color: "Orange",
  },
  // unit 9 tablet
  {
    type: "Tablet",
    brand: "Apple",
    model: "Apple iPad Pro 11",
    memory: "4GB",
    description:
      "Tablet - display: 11 QHD 2388 × 1668 Liquid Retina, Apple A12Z, RAM: 6GB, internal memory: 256GB, Wi-Fi, Bluetooth, webcamera 12Mpx+ 7Mpx, battery life up to 10hr(s), weight: 468, USB-C, iPadOS",
    photo: "assets/img/AppleiPadPro11.png",
    price: 899,
    color: "Red",
  },
  {
    type: "Laptop",
    brand: "Bose",
    model: "QuietComfort 35 II",
    memory: "4GB",
    description:
      "Noise-cancelling headphones with high-quality sound and comfortable fit.",
    photo: "",
    price: 299,
    color: "Black",
  },
  {
    type: "Laptop",
    brand: "GoPro",
    model: "HERO9 Black",
    memory: "4GB",
    description:
      "Action camera with high-resolution video recording capability and waterproof housing.",
    photo: "",
    price: 449,
    color: "Blue",
  },
  {
    type: "Laptop",
    brand: "Dell",
    model: "XPS 15",
    memory: "4GB",
    description:
      "Powerful and stylish laptop with high-resolution screen and long battery life.",
    photo: "",
    price: 1799,
    color: "Black",
  },
  {
    type: "Laptop",
    brand: "Fitbit",
    model: "Versa 3",
    memory: "4GB",
    description:
      "Smartwatch with activity tracking and heart rate monitoring feature.",
    photo: "",
    price: 229,
    color: "Green",
  },
  {
    type: "Laptop",
    brand: "Amazon",
    model: "Kindle Paperwhite",
    memory: "4GB",
    description:
      "E-book reader with high-resolution display and long battery life.",
    photo: "",
    price: 129,
    color: "Black",
  },
  {
    type: "Laptop",
    brand: "Samsung",
    model: "UE55TU8000U",
    memory: "4GB",
    description:
      "4K Smart TV with crystal-clear image and wide range of colors.",
    photo: "",
    price: 699,
    color: "Black",
  },
  {
    type: "Laptop",
    brand: "Sony",
    model: "WH-1000XM4",
    memory: "4GB",
    description:
      "Headphones with active noise cancellation and high-quality sound.",
    photo: "",
    price: 349,
    color: "Blue",
  },
  {
    type: "Laptop",
    brand: "Logitech",
    model: "MX Master 3",
    memory: "4GB",
    description:
      "Wireless mouse with advanced ergonomics and multifunctional scroll wheel.",
    photo: "",
    price: 99,
    color: "Green",
  },
  {
    type: "Laptop",
    brand: "Huawei",
    model: "MateBook X Pro",
    memory: "4GB",
    description:
      "Slim and powerful laptop with high-resolution screen and long battery life.",
    photo: "",
    price: 1499,
    color: "Black",
  },
];

export { products };
