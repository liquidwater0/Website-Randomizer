chrome.storage.sync.get({randomElementsCheck: false, randomIconCheck: true}, function(items) {
  if (items.randomElementsCheck == true && items.randomIconCheck == true) {
    document.head.insertAdjacentHTML("beforeend", `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`);
  }
});

let imagesPause = true;
let textPause = true;
let elementsPause = true;

document.addEventListener("keydown", function(event) {
  const key = event.keyCode;

  if (event.shiftKey && key == 73) { imagesPause = !imagesPause }; //Shift + I (73)

  if (event.shiftKey && key == 84) { textPause = !textPause }; //Shift + T (84)

  if (event.shiftKey && key == 69) { elementsPause = !elementsPause }; //Shift + E (69)
}); 

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

chrome.storage.sync.get({randomImagesCheck: false, imagesDelay: 1, imagesEveryCheck: true, imagesAutoCheck: true, imageCheck: true,
imageWidthCheck: true, imageHeightCheck: true}, function(items) {

if (items.randomImagesCheck == true && items.imagesAutoCheck == true) {

  setTimeout(function() {
    imagesPause = false;
    randomImages();
    imagesPause = true;
    setInterval(randomImages, items.imagesDelay * 1000);
  }, items.imagesDelay * 1000);

} else if (items.randomImagesCheck == true && items.imagesAutoCheck == false) {
  setInterval(randomImages, items.imagesDelay * 1000);
}

function randomImages() {
  const images = document.querySelectorAll("img");
  const singleImage = images[Math.floor(Math.random() * images.length)];

  function getElement(every, single) {
    if (items.imagesEveryCheck == true) {
      return every;
    } else {
      return single;
    }
  }

  if (imagesPause == false) {
    for (let img = 0; img < images.length; img++) {
      if (items.imageCheck == true) {
        getElement(images[img], singleImage).src = images[Math.floor(Math.random() * images.length)].src;
        getElement(images[img], singleImage).srcset = "";
      }

      if (items.imageWidthCheck == true) {
        getElement(images[img], singleImage).width = getRandomNumber(0, 500);
      }

      if (items.imageHeightCheck == true) {
        getElement(images[img], singleImage).height = getRandomNumber(0, 500);
      }
    }
  }
}
});

chrome.storage.sync.get({randomTextCheck: false, singleWordsCheck: false, textDelay: 1, textEveryCheck: true, changeTitleCheck: true, textAutoCheck: true, 
textFieldCheck: true, textFieldPlaceCheck: true, textCheck: true, fontFamilyCheck: true, fontWeightCheck: true, fontStyleCheck: true, textAlignCheck:true,
textDecorCheck: true, fontSizeCheck: true, colorCheck: true, textTransformCheck: true, letterSpacingCheck: true, lineHeightCheck: true, textShadowCheck: true,
textIndentCheck: true, writingModeCheck: true}, function(items) {

if (items.randomTextCheck == true && items.textAutoCheck == true) { 

  setTimeout(function() {
    textPause = false;
    randomText();
    textPause = true;
    setInterval(randomText, items.textDelay * 1000);
  }, items.textDelay * 1000);

} else if (items.randomTextCheck == true && items.textAutoCheck == false) {
  setInterval(randomText, items.textDelay * 1000);
}

function randomText() {
  const textElements = document.querySelectorAll("body *:not(script):not(link):not(style):not(noscript):not(div):not(nav):not(main):not(tr):not(ul):not(table)");
  const singleTextElement = textElements[Math.floor(Math.random() * textElements.length)];

  const elements = document.querySelectorAll("body *:not(script):not(link):not(style):not(noscript)");
  const singleElement = elements[Math.floor(Math.random() * elements.length)];

  const inputs = document.querySelectorAll("input[type='text'], input[type='password'], input[type='email'], input[type='search'], input[type='tel'], input[type='url'], textarea");
  const singleInput = inputs[Math.floor(Math.random() * inputs.length)];
  
  const fonts = ["Arial", "Helvetica", "sans-serif", "Gadget", "Bookman Old Style", "serif", "Comic Sans MS", "cursive", "Courier", "monospace",
  "Garamond", "Georgia", "Impact", "Charcoal", "Lucida Console", "Monaco", "Lucida Sans Unicode", "Lucida Grande", "MS Sans Serif", "MS Serif", "New York",
  "Palatino Linotype", "Book Antiqua", "Palatino", "Tahoma", "Times New Roman", "Times", "Trebuchet MS", "Verdana"];
  const fontStyles = ["normal", "italic", "oblique", "initial", "inherit"];
  const textAlign = ["left", "right", "center", "justify", "initial", "inherit"];
  const textDecor = ["none", "underline", "overline", "line-through", "initial", "inherit"];
  const textTransform = ["none", "capitalize", "uppercase", "lowercase", "initial", "inherit"];
  const writingModes = ["horizontal-tb", "vertical-rl", "vertical-lr"];

  function getRandomText() {
    const words = textElements[Math.floor(Math.random() * textElements.length)].textContent.split(" ");

    if (items.singleWordsCheck == true) {
      return words[Math.floor(Math.random() * words.length)];
    } else {
      return textElements[Math.floor(Math.random() * textElements.length)].textContent;
    }
  }

  function getElement(every, single) {
    if (items.textEveryCheck == true) {
      return every;
    } else {
      return single;
    }
  }

  if (textPause == false) {  
    for (let te = 0; te < textElements.length; te++) {
      if (items.textCheck == true && getElement(textElements[te], singleTextElement).hasChildNodes()) {
        getElement(textElements[te], singleTextElement).childNodes[0].nodeValue = getRandomText();
      }

      if (items.changeTitleCheck == true) {
        document.title = getRandomText();
      } 

      if (items.writingModeCheck == true) {
        getElement(textElements[te], singleTextElement).style.writingMode = writingModes[Math.floor(Math.random() * writingModes.length)];
      }
    }
    
    for (let i = 0; i < inputs.length; i++) {
      if (items.textFieldCheck == true) {
        getElement(inputs[i], singleInput).value = getRandomText();
      }

      if (items.textFieldPlaceCheck == true) {
        getElement(inputs[i], singleInput).placeholder = getRandomText();
      }
    } 

    for (let e = 0; e < elements.length; e++) {
      if (items.fontFamilyCheck) {
        getElement(elements[e], singleElement).style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
      }

      if (items.fontWeightCheck == true) {
        getElement(elements[e], singleElement).style.fontWeight = getRandomNumber(100, 900);
      }

      if (items.fontStyleCheck == true) {
        getElement(elements[e], singleElement).style.fontStyle = fontStyles[Math.floor(Math.random() * fontStyles.length)];
      }

      if (items.textAlignCheck == true) {
        getElement(elements[e], singleElement).style.textAlign = textAlign[Math.floor(Math.random() * textAlign.length)];
      }

      if (items.textDecorCheck == true) {
        getElement(elements[e], singleElement).style.textDecoration = textDecor[Math.floor(Math.random() * textDecor.length)];
      }

      if (items.fontSizeCheck == true) {
        getElement(elements[e], singleElement).style.fontSize = `${getRandomNumber(1, 50)}px`;
      }

      if (items.colorCheck == true) {
        getElement(elements[e], singleElement).style.color = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
      }

      if (items.textTransformCheck == true) {
        getElement(elements[e], singleElement).style.textTransform = textTransform[Math.floor(Math.random() * textTransform.length)];
      }

      if (items.letterSpacingCheck == true) {
        getElement(elements[e], singleElement).style.letterSpacing = `${getRandomNumber(0, 25)}px`;
      }

      if (items.lineHeightCheck == true) {
        getElement(elements[e], singleElement).style.lineHeight = `${getRandomNumber(0, 100)}%`;
      }

      if (items.textShadowCheck == true) {
        getElement(elements[e], singleElement).style.textShadow = `${getRandomNumber(0, 10)}px ${getRandomNumber(0, 10)}px ${getRandomNumber(0, 10)}px 
        rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
      }

      if (items.textIndentCheck == true) {
        getElement(elements[e], singleElement).style.textIndent = `${getRandomNumber(0, 100)}%`;
      }
    }
  }
}
});

chrome.storage.sync.get({randomElementsCheck: false, borderCheck: true, outlineCheck: true, rotationCheck: true, cursorCheck: true, elementBackgroundCheck: true, 
borderRadiusCheck: true, paddingCheck: true, opacityCheck: true, positionCheck: true, boxShadowCheck: true, elementAutoCheck: true, elementsDelay: 1, floatCheck: true, 
widthCheck: true, heightCheck: true, visibilityCheck: true, displayCheck: true, overflowCheck: true, zIndexCheck: true, directionCheck: true, elementsEveryCheck: true, 
translateCheck: true, randomIDCheck: true, randomClassCheck: true, randomTitleCheck: true, randomContentEditCheck: true, randomDraggableCheck: true, resizeCheck: true, 
randomDisabledCheck: true, randomSelectedCheck: true, backgroundImageCheck: true, randomIconCheck: true, randomTypeCheck: true, randomStartCheck: true, randomMaxLengthCheck: true,
randomTabIndexCheck: true, randomReversedCheck: true}, function(items) {

if (items.randomElementsCheck == true && items.elementAutoCheck == true) {

  setTimeout(function() { 
    elementsPause = false; 
    randomElements(); 
    elementsPause = true;
    setInterval(randomElements, items.elementsDelay * 1000);
  }, items.elementsDelay * 1000);

} else if (items.randomElementsCheck == true && items.elementAutoCheck == false) {
  setInterval(randomElements, items.elementsDelay * 1000);
}

function randomElements() {
  const elements = document.querySelectorAll("body *:not(script):not(link):not(style):not(noscript)");
  const singleElement = elements[Math.floor(Math.random() * elements.length)];

  const disabledElements = document.querySelectorAll("button, fieldset, input, optgroup, option, select, textarea");
  const randomDisabledElement = disabledElements[Math.floor(Math.random() * disabledElements.length)];

  const options = document.querySelectorAll("option");
  const randomOption = options[Math.floor(Math.random() * options.length)];

  const ol = document.querySelectorAll("ol");
  const singleOl = ol[Math.floor(Math.random() * ol.length)];

  const li = document.querySelectorAll("li");

  const images = document.querySelectorAll("img");

  const inputs = document.querySelectorAll("textarea, input");
  const singleInput = inputs[Math.floor(Math.random() * inputs.length)];

  const typeElements = document.querySelectorAll("button, embed, input, menu, object, source");
  const singleTypeElement = typeElements[Math.floor(Math.random() * typeElements.length)];
  const types = ["button", "checkbox", "color", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit",
  "tel", "text", "time", "url", "week"];

  const borders = ["solid", "dotted", "dashed", "double", "groove", "ridge", "inset", "outset", "none", "hidden"];
  const cursors = ["alias", "all-scroll", "auto", "cell", "context-menu", "col-resize", "copy", "crosshair", "default", "e-resize", "ew-resize", "grab",
  "grabbing", "help", "move", "n-resize", "ne-resize", "nesw-resize", "ns-resize", "nw-resize", "nwse-resize", "no-drop", "none", "not-allowed",
  "pointer", "progress", "row-resize", "s-resize", "se-resize", "sw-resize", "text", "URL", "vertical-text", "w-resize", "wait", "zoom-in", "zoom-out", "initial", "inherit"];
  const positions = ["static", "absolute", "fixed", "relative", "sticky", "initial", "inherit"];
  const boxShadow = ["", "inset"]; //Blank is for outset
  const floats = ["left", "right", "none", "inherit"];
  const visibility = ["visible", "hidden", "collapse", "initial", "inherit"];
  const displays = ["inline", "block", "contents", "flex", "grid", "inline-block", "inline-flex", "inline-grid", "inline-table", "list-item", "run-in", "table", "table-caption",
  "table-column-group", "table-header-group", "table-footer-group", "table-row-group", "table-cell", "table-column", "table-row", "none", "initial", "inherit"];
  const overflow = ["visible", "hidden", "scroll", "auto", "initial", "inherit"];
  const directions = ["ltr", "rtl", "initial", "inherit"];
  const trueFalse = [true, false];
  const resizeValues = ["none", "both", "horizontal", "vertical", "initial", "inherit"];
  const insertPositions = ["afterbegin", "beforeend"];

  const icons = document.querySelectorAll(".material-icons");

  const googleIcons = ["3d_rotation", "ac_unit", "access_alarm", "access_alarms", "access_time", "accessibility", "accessible", "account_balance", "account_balance_wallet", "account_box", "account_circle", "adb", "add", "add_a_photo", "add_alarm", "add_alert", "add_box", "add_circle", "add_circle_outline", "add_location", "add_shopping_cart", "add_to_photos", "add_to_queue", "adjust", "airline_seat_flat", "airline_seat_flat_angled", "airline_seat_individual_suite","airline_seat_legroom_extra", "airline_seat_legroom_normal", "airline_seat_legroom_reduced", "airline_seat_recline_extra", "airline_seat_recline_normal", "airplanemode_active", "airplanemode_inactive", "airplay", "airport_shuttle", "alarm", "alarm_add", "alarm_off", "alarm_on", "album", "all_inclusive", "all_out", "android", "announcement", "apps", "archive", "arrow_back", "arrow_downward", "arrow_drop_down", "arrow_drop_down_circle", "arrow_drop_up", "arrow_forward", "arrow_upward", "art_track", "aspect_ratio", "assessment", "assignment", "assignment_ind", "assignment_late", "assignment_return", "assignment_returned", "assignment_turned_in", "assistant", 
  "assistant_photo", "attach_file", "attach_money", "attachment", "audiotrack", "autorenew", "av_timer", "backspace", "backup", "battery_alert", "battery_charging_full", "battery_full", "battery_std", "battery_unknown", "beach_access", "beenhere", "block", "bluetooth", "bluetooth_audio", "bluetooth_connected", "bluetooth_disabled", "bluetooth_searching", "blur_circular", "blur_linear", "blur_off", "blur_on", "book", "bookmark", "bookmark_border", "border_all", "border_bottom", "border_clear", "border_color", "border_horizontal", "border_inner", "border_left", "border_outer", "border_right", "border_style", "border_top", "border_vertical", "branding_watermark", "brightness_1", "brightness_2", "brightness_3", "brightness_4", "brightness_5", "brightness_6", "brightness_7", "brightness_auto", "brightness_high", "brightness_low", "brightness_medium", "broken_image", "brush", "bubble_chart", "bug_report", "build", "burst_mode", "business", "business_center", "cached", "cake", "call", "call_end", "call_made", "call_merge", "call_missed", "call_missed_outgoing", "call_received", "call_split", "call_to_action", "camera", "camera_alt", 
  "camera_enhance", "camera_front", "camera_rear", "camera_roll", "cancel", "card_giftcard", "card_membership", "card_travel", "casino", "cast", "cast_connected", "center_focus_strong", "center_focus_weak", "change_history", "chat", "chat_bubble", "chat_bubble_outline", "check", "check_box", "check_box_outline_blank", "check_circle", "chevron_left", "chevron_right", "child_care", "child_friendly", "chrome_reader_mode", "class", "clear", "clear_all", "close", "closed_caption", "cloud", "cloud_circle", "cloud_done", "cloud_download", "cloud_off", "cloud_queue", "cloud_upload", "code", "collections", "collections_bookmark", "color_lens", "colorize", "comment", "compare", "compare_arrows", "computer", "confirmation_number", "contact_mail", "contact_phone", "contacts", "content_copy", "content_cut", "content_paste", "control_point", "control_point_duplicate", "copyright", "create", "create_new_folder", "credit_card", "crop", "crop_16_9", "crop_3_2", "crop_5_4", "crop_7_5", "crop_din", "crop_free", "crop_landscape", "crop_original", "crop_portrait", "crop_rotate", "crop_square", "dashboard", "data_usage", "date_range", "dehaze", 
  "delete", "delete_forever", "delete_sweep", "description", "desktop_mac", "desktop_windows", "details", "developer_board", "developer_mode", "device_hub", "devices", "devices_other", "dialer_sip", "dialpad", "directions", "directions_bike", "directions_boat", "directions_bus", "directions_car", "directions_railway", "directions_run", "directions_subway", "directions_transit", "directions_walk", "disc_full", "dns", "do_not_disturb", "do_not_disturb_alt", "do_not_disturb_off", "do_not_disturb_on", "dock", "domain", "done", "done_all", "donut_large", "donut_small", "drafts", "drag_handle", "dvr", "edit", "edit_location", "eject", "email", "enhanced_encryption", "equalizer", "error", "error_outline", "euro_symbol", "ev_station", "event", "event_available", "event_busy", "event_note", "event_seat", "exit_to_app", "expand_less", "expand_more", "explicit", "explore", "exposure", "exposure_neg_1", "exposure_neg_2", "exposure_plus_1", "exposure_plus_2", "exposure_zero", "extension", "face", "fast_forward", "fast_rewind", "favorite", "favorite_border", "featured_play_list", "featured_video", "feedback", "fiber_dvr", "fiber_manual_record", 
  "fiber_new", "fiber_pin", "fiber_smart_record", "file_download", "file_upload", "filter", "filter_1", "filter_2", "filter_3", "filter_4", "filter_5", "filter_6", "filter_7", "filter_8", "filter_9", "filter_9_plus", "filter_b_and_w", "filter_center_focus", "filter_drama", "filter_frames", "filter_hdr", "filter_list", "filter_none", "filter_tilt_shift", "filter_vintage", "find_in_page", "find_replace", "fingerprint", "first_page", "fitness_center", "flag", "flare", "flash_auto", "flash_off", "flash_on", "flight", "flight_land", "flight_takeoff", "flip", "flip_to_back", "flip_to_front", "folder", "folder_open", "folder_shared", "folder_special", "font_download", "format_align_center", "format_align_justify", "format_align_left", "format_align_right", "format_bold", "format_clear", "format_color_fill", "format_color_reset", "format_color_text", "format_indent_decrease", "format_indent_increase", "format_italic", "format_line_spacing", "format_list_bulleted", "format_list_numbered", "format_paint", "format_quote", "format_shapes", "format_size", "format_strikethrough", "format_textdirection_l_to_r", "format_textdirection_r_to_l", 
  "format_underlined", "forum", "forward", "forward_10", "forward_30", "forward_5", "free_breakfast", "fullscreen", "fullscreen_exit", "functions", "g_translate", "gamepad", "games", "gavel", "gesture", "get_app", "gif", "golf_course", "gps_fixed", "gps_not_fixed", "gps_off", "grade", "gradient", "grain", "graphic_eq", "grid_off", "grid_on", "group", "group_add", "group_work", "hd", "hdr_off", "hdr_on", "hdr_strong", "hdr_weak", "headset", "headset_mic", "healing", "hearing", "help", "help_outline", "high_quality", "highlight", "highlight_off", "history", "home", "hot_tub", "hotel", "hourglass_empty", "hourglass_full", "http", "https", "image", "image_aspect_ratio", "import_contacts", "import_export", "important_devices", "inbox", "indeterminate_check_box", "info", "info_outline", "input", "insert_chart", "insert_comment", "insert_drive_file", "insert_emoticon", "insert_invitation", "insert_link", "insert_photo", "invert_colors", "invert_colors_off", "iso", "keyboard", "keyboard_arrow_down", "keyboard_arrow_left", "keyboard_arrow_right", "keyboard_arrow_up", "keyboard_backspace", "keyboard_capslock", "keyboard_hide", "keyboard_return", 
  "keyboard_tab", "keyboard_voice", "kitchen", "label", "label_outline", "landscape", "language", "laptop", "laptop_chromebook", "laptop_mac", "laptop_windows", "last_page", "launch", "layers", "layers_clear", "leak_add", "leak_remove", "lens", "library_add", "library_books", "library_music", "lightbulb_outline", "line_style", "line_weight", "linear_scale", "link", "linked_camera", "list", "live_help", "live_tv", "local_activity", "local_airport", "local_atm", "local_bar", "local_cafe", "local_car_wash", "local_convenience_store", "local_dining", "local_drink", "local_florist", "local_gas_station", "local_grocery_store", "local_hospital", "local_hotel", "local_laundry_service", "local_library", "local_mall", "local_movies", "local_offer", "local_parking", "local_pharmacy", "local_phone", "local_pizza", "local_play", "local_post_office", "local_printshop", "local_see", "local_shipping", "local_taxi", "location_city", "location_disabled", "location_off", "location_on", "location_searching", "lock", "lock_open", "lock_outline", "looks", "looks_3", "looks_4", "looks_5", "looks_6", "looks_one", "looks_two", "loop", "loupe", "low_priority", 
  "loyalty", "mail", "mail_outline", "map", "markunread", "markunread_mailbox", "memory", "menu", "merge_type", "message", "mic", "mic_none", "mic_off", "mms", "mode_comment", "mode_edit", "monetization_on", "money_off", "monochrome_photos", "mood", "mood_bad", "more", "more_horiz", "more_vert", "motorcycle", "mouse", "move_to_inbox", "movie", "movie_creation", "movie_filter", "multiline_chart", "music_note", "music_video", "my_location", "nature", "nature_people", "navigate_before", "navigate_next", "navigation", "near_me", "network_cell", "network_check", "network_locked", "network_wifi", "new_releases", "next_week", "nfc", "no_encryption", "no_sim", "not_interested", "note", "note_add", "notifications", "notifications_active", "notifications_none", "notifications_off", "notifications_paused", "offline_pin", "ondemand_video", "opacity", "open_in_browser", "open_in_new", "open_with", "pages", "pageview", "palette", "pan_tool", "panorama", "panorama_fish_eye", "panorama_horizontal", "panorama_vertical", "panorama_wide_angle", "party_mode", "pause", "pause_circle_filled", "pause_circle_outline", "payment", "people", "people_outline", 
  "perm_camera_mic", "perm_contact_calendar", "perm_data_setting", "perm_device_information", "perm_identity", "perm_media", "perm_phone_msg", "perm_scan_wifi", "person", "person_add", "person_outline", "person_pin", "person_pin_circle", "personal_video", "pets", "phone", "phone_android", "phone_bluetooth_speaker", "phone_forwarded", "phone_in_talk", "phone_iphone", "phone_locked", "phone_missed", "phone_paused", "phonelink", "phonelink_erase", "phonelink_lock", "phonelink_off", "phonelink_ring", "phonelink_setup", "photo", "photo_album", "photo_camera", "photo_filter", "photo_library", "photo_size_select_actual", "photo_size_select_large", "photo_size_select_small", "picture_as_pdf", "picture_in_picture", "picture_in_picture_alt", "pie_chart", "pie_chart_outlined", "pin_drop", "place", "play_arrow", "play_circle_filled", "play_circle_outline", "play_for_work", "playlist_add", "playlist_add_check", "playlist_play", "plus_one", "poll", "polymer", "pool", "portable_wifi_off", "portrait", "power", "power_input", "power_settings_new", "pregnant_woman", "present_to_all", "print", "priority_high", "public", "publish", "query_builder", 
  "question_answer", "queue", "queue_music", "queue_play_next", "radio", "radio_button_checked", "radio_button_unchecked", "rate_review", "receipt", "recent_actors", "record_voice_over", "redeem", "redo", "refresh", "remove", "remove_circle", "remove_circle_outline", "remove_from_queue", "remove_eye_red", "remove_shopping_cart", "reorder", "repeat", "repeat_one", "replay", "replay_10", "replay_30", "replay_5", "reply", "reply_all", "report", "report_problem", "restaurant", "restaurant_menu", "restore", "restore_page", "ring_volume", "room", "room_service", "rotate_90_degrees_ccw", "rotate_left", "rotate_right", "rounded_corner", "router", "rowing", "rss_feed", "rv_hookup", "satellite", "save", "scanner", "schedule", "school", "screen_lock_landscape", "screen_lock_portrait", "screen_lock_rotation", "screen_rotation", "screen_share", "sd_card", "sd_storage", "search", "security", "select_all", "send", "sentiment_dissatisfied", "sentiment_neutral", "sentiment_satisfied", "sentiment_very_dissatisfied", "sentiment_very_satisfied", "settings", "settings_applications", "settings_backup_restore", "settings_bluetooth", "settings_brightness", 
  "settings_cell", "settings_ethernet", "settings_input_antenna", "settings_input_component", "settings_input_composite", "settings_input_hdmi", "settings_input_svideo", "settings_overscan", "settings_phone", "settings_power", "settings_remote", "settings_system_daydream", "settings_voice", "share", "shop", "shop_two", "shopping_basket", "shopping_cart", "short_text", "show_chart", "shuffle", "signal_cellular_4_bar", "signal_cellular_connected_no_internet_4_bar", "signal_cellular_no_sim", "signal_cellular_null", "signal_cellular_off", "signal_wifi_4_bar", "signal_wifi_4_bar_lock", "signal_wifi_off", "sim_card", "sim_card_alert", "skip_next", "skip_previous", "slideshow", "slow_motion_video", "smartphone", "smoke_free", "smoking_rooms", "sms", "sms_failed", "snooze", "sort", "sort_by_alpha", "spa", "space_bar", "speaker", "speaker_group", "speaker_notes", "speaker_notes_off", "speaker_phone", "spellcheck", "star", "star_border", "star_half", "stars", "stay_current_landscape", "stay_current_portrait", "stay_primary_landscape", "stay_primary_portrait", "stop", "stop_screen_share", "storage", "store", "store_mall_directory", "straighten", 
  "streetview", "strikethrough_s", "style", "subdirectory_arrow_left", "subdirectory_arrow_right", "subject", "subscriptions", "subtitle", "subway", "supervisor_account", "surround_sound", "swap_calls", "swap_horiz", "swap_vert", "swap_vertical_circle", "switch_camera", "switch_video", "sync", "sync_disabled", "sync_problem", "system_update", "system_update_alt", "tab", "tab_unselected", "tablet", "tablet_android", "tablet_mac", "tag_faces", "tap_and_play", "terrain", "text_fields", "text_format", "textsms", "texture", "theaters", "thumb_down", "thumb_up", "thumbs_up_down", "time_to_leave", "timelapse", "timeline", "timer", "timer_10", "timer_3", "timer_off", "title", "toc", "today", "toll", "tonality", "touch_app", "toys", "track_changes", "traffic", "train", "tram", "transfer_within_a_station", "transform", "translate", "trending_down", "trending_flat", "trending_up", "tune", "turned_in", "turned_in_not", "tv", "unarchive", "undo", "unfold_less", "unfold_more", "update", "usb", "verified_user", "vertical_align_bottom", "vertical_align_center", "vertical_align_top", "vibration", "video_call", "video_label", "video_library", "videocam", 
  "videocam_off", "videogame_asset", "view_agenda", "view_array", "view_carousel", "view_column", "view_comfy", "view_compact", "view_day", "view_headline", "view_list", "view_module", "view_quilt", "view_stream", "view_week", "vignette", "visibility", "visibility_off", "voice_chat", "voicemail", "volume_down", "volume_mute", "volume_off", "volume_up", "vpn_key", "vpn_lock", "wallpaper", "warning", "watch", "watch_later", "wb_auto", "wb_cloudy", "wb_incandescent", "wb_iridescent", "wb_sunny", "wc", "web", "web_asset", "weekend", "whatshot", "widgets", "wifi", "wifi_lock", "wifi_tethering", "work", "wrap_text", "youtube_searched_for", "zoom_in", "zoom_out", "zoom_out_map"];

  function getElement(every, single) {
    if (items.elementsEveryCheck == true) {
      return every;
    } else {
      return single;
    }
  }

  if (elementsPause == false) {
    icons.forEach(function(icon) { icon.remove() });
    
    for (let e = 0; e < elements.length; e++) {
      if (items.borderCheck == true) {
        getElement(elements[e], singleElement).style.border = `${borders[Math.floor(Math.random() * borders.length)]} rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})
        ${getRandomNumber(0, 25)}px`;
      }

      if (items.outlineCheck == true) {
        getElement(elements[e], singleElement).style.outline = `${borders[Math.floor(Math.random() * borders.length)]} rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})
        ${getRandomNumber(0, 25)}px`;
      }

      if (items.rotationCheck == true) {
        getElement(elements[e], singleElement).style.transform = `rotate(${getRandomNumber(-360, 360)}deg)`;
      }

      if (items.cursorCheck == true) {
        getElement(elements[e], singleElement).style.cursor = cursors[Math.floor(Math.random() * cursors.length)];
      }

      if (items.elementBackgroundCheck == true) {
        getElement(elements[e], singleElement).style.backgroundColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
      }

      if (items.borderRadiusCheck == true) {
        getElement(elements[e], singleElement).style.borderRadius = `${getRandomNumber(0, 100)}px ${getRandomNumber(0, 100)}px ${getRandomNumber(0, 100)}px ${getRandomNumber(0, 100)}px`;
      }

      if (items.paddingCheck == true) {
        getElement(elements[e], singleElement).style.padding = `${getRandomNumber(0, 50)}px ${getRandomNumber(0, 50)}px ${getRandomNumber(0, 50)}px ${getRandomNumber(0, 50)}px`;
      }

      if (items.opacityCheck == true) {
        getElement(elements[e], singleElement).style.opacity = Math.random();
      }

      if (items.positionCheck == true) {
        getElement(elements[e], singleElement).style.position = positions[Math.floor(Math.random() * positions.length)];
      }

      if (items.boxShadowCheck == true) {
        getElement(elements[e], singleElement).style.boxShadow = `${getRandomNumber(0, 100)}px ${getRandomNumber(0, 100)}px ${getRandomNumber(0, 100)}px ${getRandomNumber(0, 100)}px 
        rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}) ${boxShadow[Math.floor(Math.random() * boxShadow.length)]}`;
      }

      if (items.floatCheck == true) {
        getElement(elements[e], singleElement).style.float = floats[Math.floor(Math.random() * floats.length)];
      }

      if (items.widthCheck == true) {
        getElement(elements[e], singleElement).style.width = `${getRandomNumber(0, 100)}%`;
      }

      if (items.heightCheck == true) {
        getElement(elements[e], singleElement).style.height = `${getRandomNumber(0, 100)}%`;
      }

      if (items.visibilityCheck == true) {
        getElement(elements[e], singleElement).style.visibility = visibility[Math.floor(Math.random() * visibility.length)];
      }

      if (items.displayCheck == true) {
        getElement(elements[e], singleElement).style.display = displays[Math.floor(Math.random() * displays.length)];
      }

      if (items.overflowCheck == true) {
        getElement(elements[e], singleElement).style.overflow = overflow[Math.floor(Math.random() * overflow.length)];
      }
      
      if (items.zIndexCheck == true) {
        getElement(elements[e], singleElement).style.zIndex = getRandomNumber(-1, 5);
      }

      if (items.directionCheck == true) {
        getElement(elements[e], singleElement).style.direction = directions[Math.floor(Math.random() * directions.length)];
      }

      if (items.translateCheck == true) {
        getElement(elements[e], singleElement).style.transform = `translate(${getRandomNumber(0, 200)}px, ${getRandomNumber(0, 200)}px)`;
      }

      if (items.randomContentEditCheck == true) {
        getElement(elements[e], singleElement).contentEditable = trueFalse[Math.floor(Math.random() * trueFalse.length)];
      }

      if (items.randomIDCheck == true) {
        getElement(elements[e], singleElement).id = elements[Math.floor(Math.random() * elements.length)].id;
      }

      if (items.randomClassCheck == true) {
        getElement(elements[e], singleElement).classList = elements[Math.floor(Math.random() * elements.length)].classList;
      } 

      if (items.randomDraggableCheck == true) {
        getElement(elements[e], singleElement).draggable = trueFalse[Math.floor(Math.random() * trueFalse.length)];
      }

      if (items.randomTitleCheck == true) { 
        getElement(elements[e], singleElement).title = elements[Math.floor(Math.random() * elements.length)].textContent;
      } 

      if (items.resizeCheck == true) {
        getElement(elements[e], singleElement).style.resize = resizeValues[Math.floor(Math.random() * resizeValues.length)];
      }

      if (items.backgroundImageCheck == true && images[Math.floor(Math.random() * images.length)]) {
        getElement(elements[e], singleElement).style.backgroundImage = `url(${images[Math.floor(Math.random() * images.length)].src})`;
      }

      if (items.randomIconCheck == true) {
        const iconElement = `<i class='material-icons'>${googleIcons[Math.floor(Math.random() * googleIcons.length)]}</i>`;

        getElement(elements[e], singleElement).insertAdjacentHTML(insertPositions[Math.floor(Math.random() * insertPositions.length)], iconElement);
      }

      if (items.randomTabIndexCheck == true) {
        getElement(elements[e], singleElement).tabIndex = getRandomNumber(0, elements.length);
      }
    }

    for (let o = 0; o < ol.length; o++) {
      if (items.randomStartCheck == true) {
        getElement(ol[o], singleOl).start = getRandomNumber(0, li.length);
      }

      if (items.randomReversedCheck == true) {
        if (singleOl.hasAttribute("reversed")) {
          getElement(ol[o], singleOl).removeAttribute("reversed");
        } else {
          getElement(ol[o], singleOl).setAttributeNode(document.createAttribute("reversed"));
        }
      }
    }

    for (let i = 0; i < inputs.length; i++) {
      if (items.randomMaxLengthCheck == true) {
        getElement(inputs[i], singleInput).maxLength = getRandomNumber(0, 100);
      }
    }

    if (items.randomDisabledCheck == true && randomDisabledElement) {
      if (randomDisabledElement.hasAttribute("disabled")) {
        randomDisabledElement.removeAttribute("disabled");
      } else {
        randomDisabledElement.setAttributeNode(document.createAttribute("disabled"));
      }
    }

    if (items.randomSelectedCheck == true && randomOption) {
      if (randomOption.hasAttribute("selected")) {
        randomOption.removeAttribute("selected");
      }
      randomOption.setAttributeNode(document.createAttribute("selected"));
    }

    for (let te = 0; te < typeElements.length; te++) {
      if (items.randomTypeCheck == true) {
        getElement(typeElements[te], singleTypeElement).type = types[Math.floor(Math.random() * types.length)];
      }
    }
  }
}
});
