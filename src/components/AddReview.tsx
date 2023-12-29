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

const AddReview = ({
  gameId,
  authorId,
  addReview,
}: {
  gameId: string
  authorId: string
  addReview: any
}) => {  
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 5,
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await addReview({
        variables: {
          review: {
            authorId: authorId,
            content: values.content,
            gameId: gameId,
            rating: values.rating,
          }
        }
      })
      form.reset()
    } catch (error) {
      console.log(error)
    }
    console.log(values)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Review</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
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
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogClose asChild>
              <Button type="submit" disabled={!authorId || !gameId}>Submit</Button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
    
  )
}


export default AddReview