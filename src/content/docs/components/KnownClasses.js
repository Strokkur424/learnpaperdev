const map = new Map(
  Object.entries({
    JavaPlugin: "org.bukkit.plugin.java.JavaPlugin",
    ComponentLogger: "net.kyori.adventure.text.logger.slf4j.ComponentLogger",
    Listener: "org.bukkit.event.Listener",
    EventHandler: "org.bukkit.event.EventHandler",
    Event: "org.bukkit.event.Event",
    BlockBreakEvent: "org.bukkit.event.block.BlockBreakEvent",
    Block: "org.bukkit.block.Block",
    EntityDamageEvent: "org.bukkit.event.entity.EntityDamageEvent",
    Cancellable: "org.bukkit.event.Cancellable",
    NullMarked: "org.jspecify.annotations.NullMarked",
    NonNull: "org.jspecify.annotations.NonNull",
    slf4jLogger: "org.slf4j.Logger",
  }),
);

export const known = map;
