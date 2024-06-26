import { inviteToProject } from '@/Redux/Project/Action'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

const InviteUserForm = () => {
  const dispatch=useDispatch();
    const {id} =useParams();
    const form=useForm({
        // resolver
        defaultValues:{
            email:"",
            
        }
    })

    const onSubmit=(data)=>{
      dispatch(inviteToProject({email:data.email,projectId:id}))
       
        console.log("create new project", data)
    }
  return (
    <div>

<Form {...form}>
              <form className="space-y-3"onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                name="name"
                render={ ({field})=>
                (
                  <FormItem>
                  <FormControl>
                    <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5" placeholder="project name"/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
                )}/>
                
                
                <DialogClose>
                  
                  <Button type="submit" className="w-full mt-5">Create Project</Button>

                  
                </DialogClose>
              </form>
         </Form>
    </div>
  )
}

export default InviteUserForm