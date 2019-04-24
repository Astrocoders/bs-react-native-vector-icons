require('isomorphic-fetch')

const path = require('path')
const fs = require('fs')
const { stripIndent } = require('common-tags')
const camelCase = require('lodash.camelcase')
const capitalize = require('lodash.capitalize')

const FINAL_FILE = 'src/RNIcons.re'

const ICONS = [
  {
    requirePath: 'react-native-vector-icons/FontAwesome',
    name: 'FontAwesome',
    icons: 'https://raw.githubusercontent.com/oblador/react-native-vector-icons/master/glyphmaps/FontAwesome.json',
  },
  {
    requirePath: 'react-native-vector-icons/Feather',
    name: 'Feather',
    icons: 'https://raw.githubusercontent.com/oblador/react-native-vector-icons/master/glyphmaps/Feather.json',
  },
  {
    requirePath: 'react-native-vector-icons/Entypo',
    name: 'Entypo',
    icons: 'https://raw.githubusercontent.com/oblador/react-native-vector-icons/master/glyphmaps/Entypo.json',
  },
  {
    requirePath: 'react-native-vector-icons/Ionicons',
    name: 'Ionicons',
    icons: 'https://raw.githubusercontent.com/oblador/react-native-vector-icons/master/glyphmaps/Ionicons.json',
  },
  {
    requirePath: 'react-native-vector-icons/MaterialIcons',
    name: 'MaterialIcons',
    icons: 'https://raw.githubusercontent.com/oblador/react-native-vector-icons/master/glyphmaps/MaterialIcons.json',
  },
  {
    requirePath: 'react-native-vector-icons/MaterialCommunityIcons',
    name: 'MaterialCommunityIcons',
    icons:
      'https://raw.githubusercontent.com/oblador/react-native-vector-icons/master/glyphmaps/MaterialCommunityIcons.json',
  },
  {
    requirePath: 'react-native-vector-icons/Foundation',
    name: 'Foundation',
    icons: 'https://raw.githubusercontent.com/oblador/react-native-vector-icons/master/glyphmaps/Foundation.json',
  },
  {
    requirePath: 'react-native-vector-icons/EvilIcons',
    name: 'EvilIcons',
    icons: 'https://raw.githubusercontent.com/oblador/react-native-vector-icons/master/glyphmaps/EvilIcons.json',
  },
]

const moduleTemplate = ({ name, requirePath, variant }) => stripIndent`
module ${name} =
  {
    [@bs.deriving jsConverter]
    type name = [
      ${variant}
    ];
    let nameToJs = nameToJs;

    [@bs.module "${requirePath}"]
    [@react.component]
    external make : (~name: string, ~color: string=?, ~size: float=?) => React.element = "default";

    let makeProps = (~name) => makeProps(~name=nameToJs(name));
  };
`

const generateVariantFromIconsSet = icons =>
  Object.keys(icons)
    .map(icon => `| [@bs.as "${icon}"] \`_${camelCase(icon)}`)
    .join('\n')

function generate() {
  console.log('Generating...')
  Promise.all(
    ICONS.map(({ requirePath, name, icons }) => {
      console.log(`Fetching ${name} from ${icons}\n`)

      return fetch(icons)
        .then(res => res.json())
        .then(generateVariantFromIconsSet)
        .then(variant => moduleTemplate({ name, requirePath, variant }))
    }),
  )
    .then(bindings => bindings.join('\n'))
    .then(file => {
      console.log('Saving file')
      fs.writeFileSync(path.join(__dirname, FINAL_FILE), file)
    })
}

generate()
