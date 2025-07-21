import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
const category=[
    "Frontend Developer",
    "Backend Developer",
    "Graphic Designer",
    "FullStack Developer",
    "Data Analyst"
]

const CategoryCarousel=()=>{
return(
    <div>
        <Carousel className="w-full max-w-xl mx-auto">
            <CarouselContent>
                {
                category.map((item, index) => (
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index} >
                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border border-maroon-600 w-full h-40 flex items-center justify-center bg-golden-100">
                            <CardContent className="p-4 text-center text-lg font-semibold text-maroon-700">
                                {item}
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))
                }
            </CarouselContent>
            <CarouselPrevious className="text-maroon-700 hover:text-maroon-900" />
            <CarouselNext className="text-maroon-700 hover:text-maroon-900" />
        </Carousel>
    </div>
)
}
export default CategoryCarousel;