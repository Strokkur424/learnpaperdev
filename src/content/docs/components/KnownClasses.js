const map = new Map(
  Object.entries({
    Server: "org.bukkit.Server",
    World: "org.bukkit.World",

    Team: "org.bukkit.scoreboard.Team",

    Block: "org.bukkit.block.Block",

    Player: "org.bukkit.entity.Player",
    Entity: "org.bukkit.entity.Entity",

    CommandSender: "org.bukkit.command.CommandSender",

    JavaPlugin: "org.bukkit.plugin.java.JavaPlugin",

    slf4jLogger: "org.slf4j.Logger",
    ComponentLogger: "net.kyori.adventure.text.logger.slf4j.ComponentLogger",

    Event: "org.bukkit.event.Event",
    Listener: "org.bukkit.event.Listener",
    Cancellable: "org.bukkit.event.Cancellable",
    EventHandler: "org.bukkit.event.EventHandler",
    BlockBreakEvent: "org.bukkit.event.block.BlockBreakEvent",
    EntityDamageEvent: "org.bukkit.event.entity.EntityDamageEvent",

    NonNull: "org.jspecify.annotations.NonNull",
    NullMarked: "org.jspecify.annotations.NullMarked",

    Component: "net.kyori.adventure.text.Component",
    ComponentLike: "net.kyori.adventure.text.ComponentLike",
    TextComponent: "net.kyori.adventure.text.TextComponent",
    TextComponentBuilder: "net.kyori.adventure.text.TextComponent\\.Builder",

    HoverEventSource: "net.kyori.adventure.text.event.HoverEventSource",
    ClickEvent: "net.kyori.adventure.text.event.ClickEvent",

    Audience: "net.kyori.adventure.audience.Audience",
    ForwardingAudience: "net.kyori.adventure.audience.ForwardingAudience",

    Sound: "net.kyori.adventure.sound.Sound",
    Title: "net.kyori.adventure.title.Title",
    BossBar: "net.kyori.adventure.bossbar.BossBar",
    AdventureBook: "net.kyori.adventure.inventory.Book",

    MiniMessage: "net.kyori.adventure.text.minimessage.MiniMessage",
    TagResolver:
      "net.kyori.adventure.text.minimessage.tag.resolver.TagResolver",
    Placeholder:
      "net.kyori.adventure.text.minimessage.tag.resolver.Placeholder",
    Tag: "net.kyori.adventure.text.minimessage.tag.Tag",
  }),
);

export const known = map;
