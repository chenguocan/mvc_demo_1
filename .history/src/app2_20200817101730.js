import $ from "jquery"
const $tabBar = $("#app2 .tab-bar");
const $balContent = $("#app2 .tab-content");
$tabBar.on("click", "li", ((e) => {
    const $li = $(e.currentTarget);
    const index = $li.index();
    console.log(index);
    $tabContent.children().eq(index).css({ display: "block" });
}))