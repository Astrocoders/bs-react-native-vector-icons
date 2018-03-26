let get = (value, default) =>
  switch value {
  | None => default
  | Some(currentValue) => currentValue
  };

module EvilIcons = {
  [@bs.module "react-native-vector-icons/EvilIcons"]
  external evilIcons : ReasonReact.reactClass = "default";
  let make = (~name, ~color=?, ~size=?, children) =>
    ReasonReact.wrapJsForReason(
      ~reactClass=evilIcons,
      ~props={"name": name, "color": get(color, "#000"), "size": get(size, 16.)},
      children
    );
};

module FontAwesome = {
  [@bs.module "react-native-vector-icons/FontAwesome"]
  external fontAwesome : ReasonReact.reactClass = "default";
  let make = (~name, ~color=?, ~size=?, children) =>
    ReasonReact.wrapJsForReason(
      ~reactClass=fontAwesome,
      ~props={"name": name, "color": get(color, "#000"), "size": get(size, 16.)},
      children
    );
};

module SimpleLineIcons = {
  [@bs.module "react-native-vector-icons/SimpleLineIcons"]
  external simpleLineIcons : ReasonReact.reactClass = "default";
  let make = (~name, ~color=?, ~size=?, children) =>
    ReasonReact.wrapJsForReason(
      ~reactClass=simpleLineIcons,
      ~props={"name": name, "color": get(color, "#000"), "size": get(size, 16.)},
      children
    );
};

module MaterialCommunityIcons = {
  [@bs.module "react-native-vector-icons/MaterialCommunityIcons"]
  external materialCommunityIcons : ReasonReact.reactClass = "default";
  let make = (~name, ~color=?, ~size=?, children) =>
    ReasonReact.wrapJsForReason(
      ~reactClass=materialCommunityIcons,
      ~props={"name": name, "color": get(color, "#000"), "size": get(size, 16.)},
      children
    );
};

module MaterialIcons = {
	[@bs.module "react-native-vector-icons/MaterialIcons"]
	external materialIcons: ReasonReact.reactClass = "default";
	let make = (~name, ~color=?, ~size=?, children) =>
		ReasonReact.wrapJsForReason(
			~reactClass=materialIcons,
			~props={"name": name, "color": get(color, "#000"), "size": get(size, 16.)},
			children
		);
};

module Entypo = {
	[@bs.module "react-native-vector-icons/Entypo"]
	external entypo: ReasonReact.reactClass = "default";
	let make = (~name, ~color=?, ~size=?, children) =>
		ReasonReact.wrapJsForReason(
			~reactClass=entypo,
			~props={"name": name, "color": get(color, "#000"), "size": get(size, 16.)},
			children
		);
};

module Feather = {
	[@bs.module "react-native-vector-icons/Feather"]
	external feather: ReasonReact.reactClass = "default";
	let make = (~name, ~color=?, ~size=?, children) =>
		ReasonReact.wrapJsForReason(
			~reactClass=feather,
			~props={"name": name, "color": get(color, "#000"), "size": get(size, 16.)},
			children
		);
};

module Ionicons = {
	[@bs.module "react-native-vector-icons/Ionicons"]
	external ionicons: ReasonReact.reactClass = "default";
	let make = (~name, ~color=?, ~size=?, children) =>
		ReasonReact.wrapJsForReason(
			~reactClass=ionicons,
			~props={"name": name, "color": get(color, "#000"), "size": get(size, 16.)},
			children
		);
};

