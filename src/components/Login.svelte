<script lang="ts">
    import { Dialog, Button, Card, Input, Label } from "$lib";
</script>
<Dialog.Root>
    <Dialog.Trigger id="loginTrigger"></Dialog.Trigger>
    <Dialog.Content>

      <Card.Root class="border-none">
        <Card.Header>
          <Card.Title class="text-2xl">Login</Card.Title>
          <Card.Description>Enter your email below to login to your account</Card.Description>
        </Card.Header>
        <Card.Content>
          <div class="grid gap-4">
            <div class="grid gap-2">
              <Label for="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div class="grid gap-2">
              <div class="flex items-center">
                <Label for="password">Password</Label>
                <a href="/authentication02" class="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" class="w-full">Login</Button>
            <Button variant="outline" class="w-full">Login with Google</Button>
          </div>
          <div class="mt-4 text-center text-sm">
            Don&apos;t have an account?
            <a href="/authentication02" class="underline"> Sign up </a>
          </div>
        </Card.Content>
      </Card.Root>

    </Dialog.Content>
  </Dialog.Root>

