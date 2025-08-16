import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Edit2, MoreHorizontal } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
function CompaniesTable() {
  return (
    <div>
      <Table>
        <TableCaption>List of recent Registered Companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className='text-right'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCell>
            <Avatar>
              <AvatarImage src="" />
            </Avatar>
          </TableCell>
          <TableCell>Library</TableCell>
        <TableCell>1/1/2025</TableCell>
        <TableCell className='text-right cursor-pointer'>
           <Popover>
            <PopoverTrigger>
                <MoreHorizontal/>
            </PopoverTrigger>
            <PopoverContent>
                <div>
                    <Edit2/>
                    <span>Edit</span>
                </div>
            </PopoverContent>
           </Popover>
        </TableCell>
        </TableBody>
      </Table>
    </div>
  );
}

export default CompaniesTable;
