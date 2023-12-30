import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useAddGameMutation } from "@/lib/graphql/generated/types-and-hooks"
import { useNavigate } from "react-router-dom"
// "PC", "Xbox", "Playstation", "Nintendo", "Android", "IOS"
const platforms = [
  {
    id: "PC",
    label: "PC",
  },
  {
    id: "Xbox",
    label: "Xbox",
  },
  {
    id: "Playstation",
    label: "Playstation",
  },
  {
    id: "Nintendo",
    label: "Nintendo",
  },
  {
    id: "Android",
    label: "Android",
  },
  {
    id: "IOS",
    label: "IOS",
  },
] as const

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  image: z.string().min(2, {
    message: "Image must not be empty.",
  }).url({
    message: "Image must be a valid URL.",
  }),
  price: z.string().min(1, {
    message: "Price must not be empty.",
  }).refine((value) => {
    return !isNaN(Number(value))
  }, {
    message: "Price must be a number.",
  }),
  company: z.string().min(1, {
    message: "Company must not be empty.",
  }),
  platform: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})

const AddGame = () => {
  const navigate = useNavigate();
  const [addGame, { loading, error }] = useAddGameMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      platform: ["Nintendo"]
    }
  })


  async function onSubmit(values: z.infer<typeof formSchema>) {
    await addGame({
      variables: {
        game: {
          name: values.name,
          description: values.description,
          image: values.image,
          price: Number(values.price),
          company: values.company,
          platform: values.platform,
        }
      }
    })
    navigate('/dashboard')
    console.log(values)
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error?.message}</p>;
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Game of Thrones.." {...field} />
              </FormControl>
              <FormDescription>
                This is the name of your game.
              </FormDescription>
              <FormMessage itemType="error" hidden={!form.getFieldState("name").invalid} >
                hi
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="This a single player RPG game.." {...field} />
              </FormControl>
              <FormDescription>
                This is the Game description
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input placeholder="https://..." {...field} />
              </FormControl>
              <FormDescription>
                This is the Game image
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="59.99" {...field} />
              </FormControl>
              <FormDescription>
                This is the Game price
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="Ubisoft" {...field} />
              </FormControl>
              <FormDescription>
                This is the Game company
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="platform"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Platform</FormLabel>
                <FormDescription>
                  Select the platforms the game is available on.
                </FormDescription>
              </div>
              {platforms.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="platform"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" >Submit</Button>
      </form>
    </Form>
  )
}

export default AddGame