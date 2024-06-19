import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import IssueCard from './IssueCard'
import { Button } from '@/components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'
import CreateIssueForm from './CreateIssueForm'
const IssueList = ({title,status}) => {
  return (
    <>
     <Dialog>
         <Card className=" w-full md:w-[300px] lg:w-[310px]">
            <CardHeader>
                <CardTitle>
                     {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="px-2">
                <div className='space-y-2'>
                   {[1,1,1].map(()=> <IssueCard/>
                )} 
                </div>
            </CardContent>
            <CardFooter>
                <DialogTrigger>
                    <Button  variant="outline" className="flex  w-full item-center gap-2">
                        <PlusIcon/>
                        Create Issue</Button>
                </DialogTrigger>

            </CardFooter>

         </Card>
         <DialogContent>
            <DialogHeader>
                <DialogTitle>Create New Issue</DialogTitle>
            </DialogHeader>
            <CreateIssueForm/>
         </DialogContent>
      </Dialog>
    </>
  )
}

export default IssueList