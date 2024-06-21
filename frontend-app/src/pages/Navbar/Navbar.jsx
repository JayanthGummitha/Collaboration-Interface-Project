import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import CreateProjectForm from '../Project/CreateProjectForm'

import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { PersonIcon } from '@radix-ui/react-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div className='border-b py-4 px-5 flex items-center justify-between'>
        <div className='flex gap-3 items-center'>
            <p onClick={()=>navigate("/")} className='cursor-pointer'>project management</p>
            <Dialog>
                <DialogTrigger>
                    <Button variant='ghost'>New Project</Button>

                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        Create New Project
                    </DialogHeader>
                    <CreateProjectForm/>
                </DialogContent>
            </Dialog>
            <Button onClick={()=>navigate("/upgrade_plan")} variant='ghost'>Upgrade</Button>
        </div>

        <div className='flex'>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button className='rounded-full border-2 border-gray-500' variant='outline' size='icon'><PersonIcon></PersonIcon></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <p className='justify-center items-center  mx-1 mt-1 '>Jayanth</p>
        </div>
        

    </div>
  )
}

export default Navbar