import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type GalleryItem = {
  id: string;
  category: string;
  title: string;
  imageUrl: string;
  description: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    category: 'events',
    title: 'Tech Summit 2024',
    imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    description: 'Annual technology summit showcasing student innovations'
  },
  {
    id: '2',
    category: 'infrastructure',
    title: 'Main Building',
    imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
    description: 'Modern infrastructure of ITM University'
  },
  {
    id: '3',
    category: 'workshops',
    title: 'Coding Workshop',
    imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    description: 'Students participating in coding workshop'
  },
  {
    id: '4',
    category: 'student-life',
    title: 'Campus Life',
    imageUrl: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23',
    description: 'Students enjoying campus activities'
  },
  {
    id: '5',
    category: 'infrastructure',
    title: 'Library Building',
    imageUrl: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833',
    description: 'State-of-the-art library facility'
  }
];

const GalleryGrid = ({ items }: { items: GalleryItem[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {items.map((item) => (
        <Dialog key={item.id}>
          <DialogTrigger asChild>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <div className="grid gap-4">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="container mx-auto py-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
      
      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="workshops">Workshops</TabsTrigger>
          <TabsTrigger value="student-life">Student Life</TabsTrigger>
        </TabsList>

        <TabsContent value={activeCategory} className="mt-6">
          <GalleryGrid items={filteredItems} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Gallery;