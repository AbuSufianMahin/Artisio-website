import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';

const ProductsPage = async () => {
    const productsCollection = dbConnect(collectionNamesObj.productsCollection);
    const productsData = await productsCollection.find({}).toArray();
    return (
        <section className='max-w-7xl mx-auto px-4 py-8'>
            <h1 className="text-3xl font-bold mb-6">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productsData.map((product) => (
                    <Card key={product._id} className="shadow-md hover:shadow-lg transition-shadow duration-200 py-4 gap-2 justify-between">
                        <CardHeader className={"px-4"}>

                            <div className="w-full relative rounded-lg overflow-hidden h-48 aspect-video">
                                <Image
                                    src={product.image || "/placeholder.png"}
                                    alt={product.name || "Product image"}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    priority
                                    quality={75}
                                    placeholder="blur"
                                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9kfa"
                                />
                            </div>
                        </CardHeader>
                        <CardContent className={"px-4"}>
                            <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
                            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{product.description}</p>
                            <div className="mt-2 flex items-center justify-between">
                                <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
                                {product.featured && <Badge variant="secondary">Featured</Badge>}
                            </div>
                        </CardContent>
                        <CardFooter className="px-4">
                            <Button className="w-full">View Details</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

        </section>
    );
};

export default ProductsPage;