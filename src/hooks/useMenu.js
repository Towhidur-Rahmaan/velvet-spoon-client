import { useEffect, useState } from "react";
import api from "../services/api";

const fallbackMenu = [
  {
    _id: "1",
    name: "Truffle Risotto",
    description: "Wild mushrooms, aged parmesan, white truffle essence.",
    price: 42,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554",
    category: "Chef's Signature",
  },
  {
    _id: "2",
    name: "Velvet Espresso",
    description: "Dark roasted single-origin beans with silky crema finish.",
    price: 12,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    category: "Coffee",
  },
  {
    _id: "3",
    name: "Golden Chocolate Tart",
    description: "Belgian chocolate with edible gold dust & hazelnut crust.",
    price: 18,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
    category: "Dessert",
  },
  {
    _id: "4",
    name: "Lobster Thermidor",
    description: "Creamy cognac lobster baked in its shell with herbs.",
    price: 68,
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae",
    category: "Main Course",
  },
  {
    _id: "5",
    name: "Black Garlic Steak",
    description: "Dry-aged beef with black garlic glaze & smoked butter.",
    price: 75,
    image: "https://images.unsplash.com/photo-1558030006-450675393462",
    category: "Chef's Signature",
  },
  {
    _id: "6",
    name: "Saffron Risotto Verde",
    description: "Italian arborio rice with saffron, peas & fresh herbs.",
    price: 38,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    category: "Seasonal",
  },
  {
    _id: "7",
    name: "Velvet Tiramisu",
    description: "Classic tiramisu layered with espresso cream & cocoa dust.",
    price: 16,
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834",
    category: "Dessert",
  },
  {
    _id: "8",
    name: "Herb Crusted Lamb Rack",
    description: "Tender lamb with rosemary crust & red wine reduction.",
    price: 62,
    image: "https://images.unsplash.com/photo-1604908177522-040c6b3a2b8f",
    category: "Main Course",
  },
  {
    _id: "9",
    name: "Midnight Cold Brew",
    description: "Slow-steeped cold brew with chocolate undertones.",
    price: 10,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    category: "Coffee",
  },
  {
    _id: "10",
    name: "Caviar Blini",
    description: "Buckwheat blini topped with premium oscietra caviar.",
    price: 85,
    image: "https://images.unsplash.com/photo-1625944525533-473f2a0d1f1a",
    category: "Chef's Signature",
  },
  {
    _id: "11",
    name: "Smoked Duck Breast",
    description: "Pan-seared duck with berry glaze and microgreens.",
    price: 58,
    image: "https://images.unsplash.com/photo-1604908177077-2b6d2f2d0f7b",
    category: "Main Course",
  },
  {
    _id: "12",
    name: "Vanilla Bean Panna Cotta",
    description: "Silky panna cotta with berry coulis and mint.",
    price: 14,
    image: "https://images.unsplash.com/photo-1505253213348-53e3e3b0f0a2",
    category: "Dessert",
  },
  {
    _id: "13",
    name: "Matcha Cloud Latte",
    description: "Premium Japanese matcha with creamy milk foam.",
    price: 11,
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7",
    category: "Coffee",
  },
  {
    _id: "14",
    name: "Seasonal Citrus Salad",
    description: "Fresh citrus medley with honey-lime dressing.",
    price: 22,
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af",
    category: "Seasonal",
  },
  {
    _id: "15",
    name: "Velvet Chef Platter",
    description: "Exclusive tasting selection curated by our head chef.",
    price: 120,
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    category: "Chef's Signature",
  },
];

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchMenu = async () => {
      try {
        setLoading(true);

        const res = await api.get("/menu");

        if (isMounted) {
          if (Array.isArray(res.data) && res.data.length > 0) {
            setMenu(res.data);
          } else {
            setMenu(fallbackMenu);
          }
        }
      } catch (err) {
        console.error("API failed, using fallback menu:", err.message);

        if (isMounted) {
          setMenu(fallbackMenu);
          setError("Using offline menu data");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchMenu();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    menu,
    loading,
    error,
  };
};

export default useMenu;
