import { Button } from '@/components/ui/button';
import {Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MagnifyingGlassIcon, MixerHorizontalIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react'
import ProjectCard from '../Project/ProjectCard';

const tags=[
    'all','react','nextjs','spring boot','mysql','mongodb','angular','python','flask','django'
]
const projectList = () => {
    const [keyword,setKeyword]=useState();
    const handleFilterChange=(section,value)=>{
                console.log("value :" ,value ,section)
    }
const handleSearchChange=(e)=>{
       setKeyword(e.target.value);
}
  return (
    <>
        <div className='relative px-5 lg:px-0 lg:flex  gap-5 justify-center py-5'>
            <section className='filterSection  '> 
                <Card className='p-5 sticky top-10  '>
                    <div className='flex justify-between lg:w-[20rem]'>
                        <p className='text-xl -tracking-wider'>filter</p>
                       <Button variant="ghost" size ='icon'>
                          <MixerHorizontalIcon/>
                       </Button>
                    </div>
                    <CardContent className="mt-5">
                        <ScrollArea className='space-y-7 h-[70vh]'>
                            <div>
                                <h1 className='pb-3 text-gray-400 border-b'>Category</h1>
                                <div className='pt-5'>
                                    <RadioGroup  className='space-y-3 pt-5' defaultValue="all" onValueChange={(value)=>handleFilterChange("Category", value)}>
                                        <div className='flex items-center gap-2'>
                                            <RadioGroupItem value="all" id='r1'>

                                            </RadioGroupItem>
                                            <Label htmlFor='r1'>all</Label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <RadioGroupItem value="full stack" id='r2'>

                                            </RadioGroupItem>
                                            <Label htmlFor='r2'>full stack</Label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <RadioGroupItem value="frontend" id='r3'>

                                            </RadioGroupItem>
                                            <Label htmlFor='r3'>frontend</Label>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <RadioGroupItem value="backend" id='r3'>

                                            </RadioGroupItem>
                                            <Label htmlFor='r3'>backend</Label>
                                        </div>
                                    </RadioGroup>

                                </div>
                            </div>
                            <div className='pt-9'>
                                <h1 className='pb-3 text-gray-400 border-b'>Tags</h1>
                                <div className='pt-5'>
                                    <RadioGroup 
                                    className='space-y-3 pt-5'
                                    defaultValue="all" onValueChange={(value)=>handleFilterChange("Tag", value)}>
                                
                                        {tags.map((item)=>
                                             <div className='flex items-center gap-2'>
                                            <RadioGroupItem value={item} id={`r1-${item}`}>

                                            </RadioGroupItem>
                                            <Label htmlFor={`r1-${item}`}>{item}</Label>
                                        </div>
                                         )}
                                        
                                    </RadioGroup>

                                </div>
                            </div>

                        </ScrollArea>

                    </CardContent>

                </Card>

            </section>
            <section className='productListSection w-full lg:w-[48rem]'>
                <div className='flex justify-between  items-center pb-5 gap-2 '>
                    <div className='relative p-0 w-full'>
                        <Input  onChange={handleSearchChange}
                        className='40% px-9'
                        placeholder="search projects.. "/>
                        <MagnifyingGlassIcon className='absolute top-3 left-4'/>

                    </div>

                </div>
                <div>
                        <div className='space-y-5    min-h-[74vh]'>

                            {
                                keyword?[1,1,1].map((item)=>
                                  <ProjectCard/>):
                                  [1,1,1,1,1,1].map((item)=>
                                    <ProjectCard/>
                                ) 
                                
                            }

                        </div>
                </div>

            </section>
        </div>
    </>
  )
}

export default projectList;