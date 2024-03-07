
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"

import { useDeleteReviewMutation } from "@/lib/graphql/generated/types-and-hooks"
import { Trash2Icon } from "lucide-react"


const DeleteReview = ({
  reviewId,
}: {
  reviewId: string
}) => {  
  const [deleteReview] = useDeleteReviewMutation({
    refetchQueries: [
      'getMyReviews'
    ],
  })

  // 2. Define a submit handler.
  async function onSubmit() {
    try {
      await deleteReview({
        variables: {
          reviewId
        }
      })
      console.log('Deleted review successfully!')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>
          <Trash2Icon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Review</DialogTitle>
          <DialogDescription>
            Are You sure you want to delete this review?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="destructive" onClick={onSubmit}>Delete</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


export default DeleteReview