"use client";

import { useForm, Controller } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Lottie from "lottie-react";
import clayCraftingAnimation from "../../../../../public/lottieAnimation/Clay-Crafting.json"

const AddProductForm = () => {

    const { register, handleSubmit, formState: { errors }, control } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="grid lg:grid-cols-2">
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className='grid md:grid-cols-2 gap-2 md:gap-4'>
                        {/* Product Name */}
                        <div className='space-y-2'>
                            <Label htmlFor="name" className="ml-1">Product Name</Label>
                            <Input
                                id="name"
                                placeholder="Enter product name"
                                {...register('name', { required: 'Product name is required' })}
                            />
                            {errors.name && <p className="text-red-500 text-xs ml-2 -mt-1">{errors.name.message}</p>}
                        </div>

                        {/* Quantity */}
                        <div className='space-y-2'>
                            <Label htmlFor="quantity" className="ml-1">Quantity</Label>
                            <Input
                                id="quantity"
                                type="number"
                                placeholder="Enter quantity"
                                {...register('quantity', { required: 'quantity is required', min: 1 })}
                            />
                            {errors.quantity && <p className="text-red-500 text-xs ml-2 -mt-1">{errors.price.message}</p>}
                        </div>
                    </div>

                    {/* Description */}
                    <div className='space-y-2'>
                        <Label htmlFor="description" className="ml-1">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Enter product description"
                            className="h-30 resize-none overflow-y-auto"
                            {...register('description', { required: 'Description is required' })}
                        />
                        {errors.description && <p className="text-red-500 text-xs ml-2 -mt-1">{errors.description.message}</p>}
                    </div>

                    <div className='grid md:grid-cols-2 gap-2 md:gap-4'>
                        {/* Category */}
                        <div className='space-y-2 w-full'>
                            <Label htmlFor="category" className="ml-1">Category</Label>
                            <Controller
                                name="category"
                                control={control}
                                rules={{ required: 'Category is required' }}
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="handmade_clothes">Handmade Clothes</SelectItem>
                                            <SelectItem value="pottery">Pottery</SelectItem>
                                            <SelectItem value="sculptures">Sculptures</SelectItem>
                                            <SelectItem value="jewelry">Jewelry</SelectItem>
                                            <SelectItem value="woodwork">Woodwork</SelectItem>
                                            <SelectItem value="accessories">Accessories</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.category && <p className="text-red-500 text-xs ml-2 -mt-1">{errors.category.message}</p>}
                        </div>

                        {/* Price */}
                        <div className='space-y-2'>
                            <Label htmlFor="price" className="ml-1">Price</Label>
                            <Input
                                id="price"
                                type="number"
                                step="0.01" // allows decimals
                                placeholder="Enter price"
                                {...register('price', {
                                    required: 'Price is required',
                                    min: { value: 0, message: 'Price must be at least 0' }
                                })}
                            />
                            {errors.price && (
                                <p className="text-red-500 text-xs ml-2 -mt-1">{errors.price.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Image URL */}
                    <div className='space-y-2'>
                        <Label htmlFor="image" className="ml-1">Image URL</Label>
                        <Input
                            id="image"
                            placeholder="Enter image URL"
                            {...register('image', {
                                required: 'Image URL is required',
                                pattern: {
                                    value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i,
                                    message: 'Please enter a valid image URL',
                                },
                            })}
                        />
                        {errors.image && <p className="text-red-500 text-xs ml-2 -mt-1">{errors.image.message}</p>}
                    </div>

                    <Button type="submit" className="mt-4">
                        Add Product
                    </Button>
                </form>
            </div>

            <div className="hidden lg:flex">
                <Lottie animationData={clayCraftingAnimation} className='mx-auto max-h-[50vh]'></Lottie>
            </div>
        </div>

    );
};

export default AddProductForm;