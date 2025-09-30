export interface LogEntry {
 id: string // identifiant unique (pour Angular trackBy) crypto.randomUUID()
 ts: Date // timestamp (date/heure du log) new Date()
 message: string // contenu du log
 scope?: string // (optionnel) origine du log (composant/service)
}