import { Button } from "@/components/ui/button";

export default function PageButtons() {
  return (
    <div>
      <Button>default</Button>
      <Button variant="primary">primary</Button>
      <Button variant="primaryOutline">primary outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="secondaryOutline">secondary outline</Button>
      <Button variant="danger">danger</Button>
      <Button variant="dangerOutline">danger outline</Button>
      <Button variant="super">Super</Button>
      <Button variant="superOutline">Super outline</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="sidebar">Sidebar</Button>
      <Button variant="sidebarOutline">Sidebar outline</Button>
    </div>
  );
}
