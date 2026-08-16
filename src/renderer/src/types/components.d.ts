type Dimensions = 'small' | 'medium' | 'large' | 'full';
type DimensionsNoFull = Exclude<Dimensions, 'full'>;
type Radius = 'full' | 'large' | 'medium' | 'small' | 'none';
type Variant =
	| 'success'
	| 'warning'
	| 'danger'
	| 'info'
	| 'spirit'
	| 'simple'
	| 'ghost'
	| 'outline'
	| 'classic';
type FontSize = 'small' | 'medium' | 'large';
type AlignText = 'left' | 'center' | 'right';
type Colors = Exclude<Variant, 'spirit' | 'simple' | 'ghost' | 'outline'>;
type LabelSide = 'left' | 'center' | 'right';
type WrappingSize = 'small' | 'medium' | 'large';
type FieldType =
	| 'text'
	| 'password'
	| 'number'
	| 'switch'
	| 'select'
	| 'search';
type ButtonType = 'button' | 'submit' | 'reset';
type InputType = 'text' | 'password' | 'email';
type Direction = 'row' | 'col' | 'row-reverse' | 'col-reverse';
type WrapType = 'nowrap' | 'wrap' | 'wrap-reverse';
type JustifyContent =
	| 'start'
	| 'end'
	| 'center'
	| 'between'
	| 'around'
	| 'evenly';
type AlignItems = 'start' | 'end' | 'center' | 'stretch' | 'baseline';
type AvailableLocales =
	| 'fr' // Français (France, Belgique, Suisse)
	| 'en' // Anglais (Royaume-Uni, Irlande)
	| 'es' // Espagnol (Espagne)
	| 'de' // Allemand (Allemagne, Autriche, Suisse)
	| 'it' // Italien (Italie, Suisse)
	| 'pt' // Portugais (Portugal)
	| 'ru' // Russe (Russie)
	| 'pl' // Polonais (Pologne)
	| 'nl' // Néerlandais (Pays-Bas, Belgique)
	| 'sv' // Suédois (Suède)
	| 'no' // Norvégien (Norvège)
	| 'da' // Danois (Danemark)
	| 'fi' // Finnois (Finlande)
	| 'uk' // Ukrainien (Ukraine)
	| 'cs' // Tchèque (Tchéquie)
	| 'ro' // Roumain (Roumanie)
	| 'el' // Grec (Grèce)
	| 'he'; // Hébreu (Israël)
type MultiTilesData = {
	type: string;
	subTypes: MultiTilesData[];
	reasons: { reasonID: number; reasonLabel: string }[];
};
type IconsProps = React.SVGProps<SVGSVGElement> & {
	size?: number;
	strokeWidth?: number;
};

// SuperTable types from @technord/mes-kit
type SuperTableColumn = {
	key: string;
	label: string;
	sortable?: boolean;
	hideable?: boolean;
	align?: 'left' | 'center' | 'right';
	width?: [number, number];
	highlighted?: string;
};

type SuperTableRow = {
	ID: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
};
