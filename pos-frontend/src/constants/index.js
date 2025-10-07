export const popularDishes = [
    {
      id: 1,
      image: null, // Placeholder for image
      name: 'Chicken Biryani',
      numberOfOrders: 500,
    },
    {
      id: 2,
      image: null, // Placeholder for image
      name: 'Beef Nihari',
      numberOfOrders: 400,
    },
    {
      id: 3,
      image: null, // Placeholder for image
      name: 'Chicken Karahi',
      numberOfOrders: 450,
    },
    {
      id: 4,
      image: null, // Placeholder for image
      name: 'Haleem',
      numberOfOrders: 300,
    },
    {
      id: 5,
      image: null, // Placeholder for image
      name: 'Seekh Kebab',
      numberOfOrders: 350,
    },
];

export const tables = [
    { id: 1, name: "Table 1", status: "Booked", initial: "AM", seats: 4 },
    { id: 2, name: "Table 2", status: "Available", initial: "MB", seats: 6 },
    { id: 3, name: "Table 3", status: "Booked", initial: "JS", seats: 2 },
    { id: 4, name: "Table 4", status: "Available", initial: "HR", seats: 4 },
    { id: 5, name: "Table 5", status: "Booked", initial: "PL", seats: 3 },
    { id: 6, name: "Table 6", status: "Available", initial: "RT", seats: 4 },
    { id: 7, name: "Table 7", status: "Booked", initial: "LC", seats: 5 },
    { id: 8, name: "Table 8", status: "Available", initial: "DP", seats: 5 },
    { id: 9, name: "Table 9", status: "Booked", initial: "NK", seats: 6 },
    { id: 10, name: "Table 10", status: "Available", initial: "SB", seats: 6 },
];

export const startersItem = [
    {
      id: 1,
      name: "Samosa",
      price: 50,
      category: "Vegetarian"
    },
    {
      id: 2,
      name: "Pakora",
      price: 40,
      category: "Vegetarian"
    },
    {
      id: 3,
      name: "Seekh Kebab",
      price: 150,
      category: "Non-Vegetarian"
    },
    {
      id: 4,
      name: "Shami Kebab",
      price: 120,
      category: "Non-Vegetarian"
    },
];

export const mainCourse = [
  {
    id: 1,
    name: "Chicken Biryani",
    price: 250,
    category: "Non-Vegetarian"
  },
  {
    id: 2,
    name: "Beef Nihari",
    price: 300,
    category: "Non-Vegetarian"
  },
  {
    id: 3,
    name: "Chicken Karahi",
    price: 400,
    category: "Non-Vegetarian"
  },
  {
    id: 4,
    name: "Haleem",
    price: 200,
    category: "Non-Vegetarian"
  },
];

export const beverages = [
  {
    id: 1,
    name: "Chai",
    price: 30,
    category: "Hot"
  },
  {
    id: 2,
    name: "Lassi",
    price: 80,
    category: "Cold"
  },
  {
    id: 3,
    name: "Rooh Afza",
    price: 50,
    category: "Cold"
  },
];

export const desserts = [
  {
    id: 1,
    name: "Gulab Jamun",
    price: 100,
    category: "Vegetarian"
  },
  {
    id: 2,
    name: "Kheer",
    price: 120,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Jalebi",
    price: 80,
    category: "Vegetarian"
  },
];

export const menus = [
  { id: 1, name: "Starters", bgColor: "#b73e3e" ,icon: "🍲", items: startersItem },
  { id: 2, name: "Main Course", bgColor: "#5b45b0" ,icon: "🍛", items: mainCourse },
  { id: 3, name: "Beverages", bgColor: "#7f167f" ,icon: "🍹", items: beverages },
  { id: 4, name: "Desserts", bgColor: "#1d2569" ,icon: "🍰", items: desserts },
];

export const itemsData = [
  { title: "Total Categories", value: "8", percentage: "12%", color: "#5b45b0", isIncrease: false },
  { title: "Total Dishes", value: "50", percentage: "12%", color: "#285430", isIncrease: true },
  { title: "Active Orders", value: "12", percentage: "12%", color: "#735f32", isIncrease: true },
  { title: "Total Tables", value: "10", color: "#7f167f" }
];

export const metricsData = [
  { title: "Revenue", value: "₨50,846.90", percentage: "12%", color: "#025cca", isIncrease: false },
  { title: "Outbound Clicks", value: "10,342", percentage: "16%", color: "#02ca3a", isIncrease: true },
  { title: "Total Customer", value: "19,720", percentage: "10%", color: "#f6b100", isIncrease: true },
  { title: "Event Count", value: "20,000", percentage: "10%", color: "#be3e3f", isIncrease: false },
];

export const orders = [
  {
    id: "101",
    customer: "Amrit Raj",
    status: "Ready",
    dateTime: "January 18, 2025 08:32 PM",
    items: 8,
    tableNo: 3,
    total: 250.0,
  },
  {
    id: "102",
    customer: "John Doe",
    status: "In Progress",
    dateTime: "January 18, 2025 08:45 PM",
    items: 5,
    tableNo: 4,
    total: 180.0,
  },
  {
    id: "103",
    customer: "Emma Smith",
    status: "Ready",
    dateTime: "January 18, 2025 09:00 PM",
    items: 3,
    tableNo: 5,
    total: 120.0,
  },
  {
    id: "104",
    customer: "Chris Brown",
    status: "In Progress",
    dateTime: "January 18, 2025 09:15 PM",
    items: 6,
    tableNo: 6,
    total: 220.0,
  },
];