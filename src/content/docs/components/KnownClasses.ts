export function idToFullPath(id: string): string {
  const out: string | undefined = known.get(id);

  if (out == undefined) {
    return id;
  }

  return out;
}

export const known: Map<string, string> = new Map(
  Object.entries({
    server: "org.bukkit.Server",
    world: "org.bukkit.World",

    team: "org.bukkit.scoreboard.Team",

    block: "org.bukkit.block.Block",
    location: "org.bukkit.Location",

    player: "org.bukkit.entity.Player",
    entity: "org.bukkit.entity.Entity",
    livingentity: "org.bukkit.entity.LivingEntity",

    commandsender: "org.bukkit.command.CommandSender",

    javaplugin: "org.bukkit.plugin.java.JavaPlugin",

    slf4jlogger: "org.slf4j.Logger",
    componentlogger: "net.kyori.adventure.text.logger.slf4j.ComponentLogger",

    event: "org.bukkit.event.Event",
    listener: "org.bukkit.event.Listener",
    cancellable: "org.bukkit.event.Cancellable",
    eventhandler: "org.bukkit.event.EventHandler",
    blockbreakevent: "org.bukkit.event.block.BlockBreakEvent",
    playerjoinevent: "org.bukkit.event.player.PlayerJoinEvent",
    entitydamageevent: "org.bukkit.event.entity.EntityDamageEvent",

    nonnull: "org.jspecify.annotations.NonNull",
    nullmarked: "org.jspecify.annotations.NullMarked",

    component: "net.kyori.adventure.text.Component",
    componentlike: "net.kyori.adventure.text.ComponentLike",
    textcomponent: "net.kyori.adventure.text.TextComponent",
    textcomponentbuilder: "net.kyori.adventure.text.TextComponent\\.Builder",

    hovereventsource: "net.kyori.adventure.text.event.HoverEventSource",
    clickevent: "net.kyori.adventure.text.event.ClickEvent",

    audience: "net.kyori.adventure.audience.Audience",
    forwardingaudience: "net.kyori.adventure.audience.ForwardingAudience",

    sound: "net.kyori.adventure.sound.Sound",
    title: "net.kyori.adventure.title.Title",
    bossbar: "net.kyori.adventure.bossbar.BossBar",
    adventurebook: "net.kyori.adventure.inventory.Book",

    minimessage: "net.kyori.adventure.text.minimessage.MiniMessage",
    tagresolver:
      "net.kyori.adventure.text.minimessage.tag.resolver.TagResolver",
    placeholder:
      "net.kyori.adventure.text.minimessage.tag.resolver.Placeholder",
    tag: "net.kyori.adventure.text.minimessage.tag.Tag",
  }),
);
