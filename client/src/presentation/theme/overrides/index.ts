import Autocomplete from './Autocomplete'
import Backdrop from './Backdrop'
import Button from './Button'
import Card from './Card'
import Input from './Input'
import Paper from './Paper'
import Table from './Table'
import Tooltip from './Tooltip'
import Typography from './Typography'

const ComponentsOverrides = (theme: any): any => {
    return Object.assign(
        Autocomplete(theme),
        Backdrop(theme),
        Button(theme),
        Card(theme),
        Input(theme),
        Paper(),
        Table(theme),
        Tooltip(theme),
        Typography(theme)
    )
}

export default ComponentsOverrides