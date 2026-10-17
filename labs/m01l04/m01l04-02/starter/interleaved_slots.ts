interface SlotProps { title: string; children: { type: string; text: string }; }
function ClientCollapsibleShell(props: SlotProps) {
  return {
    wrapper: "div.client-shell",
    header: props.title,
    content: props.children,
  };
}
async function ServerFeedWidget() {
  return { type: "article.server-feed", text: "Secure database payload" };
}
async function CompositePage() {
  const serverChild = await ServerFeedWidget();
  return ClientCollapsibleShell({ title: "Reports", children: serverChild });
}
const page = await CompositePage();
console.log(`Wrapper component: ${page.wrapper}`);
console.log(`Header label: ${page.header}`);
console.log(`Embedded child type: ${page.content.type}`);
console.log(`Embedded payload: ${page.content.text}`);
