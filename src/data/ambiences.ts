export type Season = 'winter' | 'spring' | 'summer' | 'autumn'

export interface Ambience {
  month: number
  label: string
  shortLabel: string
  title: string
  season: Season
}

export const AMBIENCES: Ambience[] = [
  { month: 0, label: 'Janvier', shortLabel: 'JAN', title: 'Givre rose', season: 'winter' },
  { month: 1, label: 'Février', shortLabel: 'FÉV', title: 'Crépuscule froid', season: 'winter' },
  { month: 2, label: 'Mars', shortLabel: 'MAR', title: 'Premiers bourgeons', season: 'spring' },
  { month: 3, label: 'Avril', shortLabel: 'AVR', title: 'Pluie de pétales', season: 'spring' },
  { month: 4, label: 'Mai', shortLabel: 'MAI', title: 'Soir en fleurs', season: 'spring' },
  { month: 5, label: 'Juin', shortLabel: 'JUN', title: 'Lumière tardive', season: 'summer' },
  { month: 6, label: 'Juillet', shortLabel: 'JUL', title: 'Chaleur sur l’Ill', season: 'summer' },
  { month: 7, label: 'Août', shortLabel: 'AOÛ', title: 'Heure dorée', season: 'summer' },
  { month: 8, label: 'Septembre', shortLabel: 'SEP', title: 'Fin d’été', season: 'autumn' },
  { month: 9, label: 'Octobre', shortLabel: 'OCT', title: 'Feuilles cuivrées', season: 'autumn' },
  { month: 10, label: 'Novembre', shortLabel: 'NOV', title: 'Brume sur la ville', season: 'autumn' },
  { month: 11, label: 'Décembre', shortLabel: 'DÉC', title: 'Lumières d’hiver', season: 'winter' },
]
