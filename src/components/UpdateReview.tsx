import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import Stars from "@/components/ReactStars"
import { useUpdateReviewMutation } from "@/lib/graphql/generated/types-and-hooks"
import { Edit2Icon } from "lucide-react"
import { Textarea } from './ui/textarea'

const formSchema = z.object({
  rating: z
    .number()
    .min(1, {
      message: "Please enter a rating",
    })
    .max(5),
  content: z.string().min(2, {
    message: "content must be at least 2 characters.",
  }),
})

const UpdateReview = ({
  reviewId,
  content,
  rating,
}: {
  reviewId: string
  content: string
  rating: number
}) => {  
  const [updateReview] = useUpdateReviewMutation({
    refetchQueries: [
      'getMyReviews'
    ],
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating,
      content,
    },
  })
  const { isValid } = form.formState
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await updateReview({
        variables: {
          updateReviewId: reviewId,
          review: {
            content: values.content,
            rating: values.rating,
          }
        }
      })
      console.log('Updated review successfully!')
      form.reset()
    } catch (error) {
      console.log(error)
    }
    console.log(values)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>
          <Edit2Icon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Review</DialogTitle>
          <DialogDescription>
            Anyone will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Stars
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      value={field.value}
                      onChange={(rating: number) => {
                        return field.onChange(rating)
                      }}
                      size={40}
                      half={false}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comment</FormLabel>
                  <FormControl>
                    <Textarea placeholder="This game is.." {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public review.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogClose asChild>
              <Button type="submit" disabled={!isValid}>Edit</Button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}


export default UpdateReview