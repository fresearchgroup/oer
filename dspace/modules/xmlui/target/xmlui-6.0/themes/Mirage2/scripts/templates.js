this["DSpace"] = this["DSpace"] || {};
this["DSpace"]["templates"] = this["DSpace"]["templates"] || {};

this["DSpace"]["templates"]["discovery_advanced_filters"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"aspect_discovery_SimpleSearch_row_filter-new-"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"\n     class=\"ds-form-item row advanced-filter-row search-filter\">\n    <div class=\"col-xs-4 col-sm-2\">\n        <p>\n            <select id=\"aspect_discovery_SimpleSearch_field_filtertype_"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"ds-select-field form-control\"\n                    name=\"filtertype_"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = (helpers.set_selected || (depth0 && depth0.set_selected) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"set_selected","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </p>\n    </div>\n    <div class=\"col-xs-4 col-sm-2\">\n        <p>\n            <select id=\"aspect_discovery_SimpleSearch_field_filter_relational_operator_"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"\n                    class=\"ds-select-field form-control\" name=\"filter_relational_operator_"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = (helpers.set_selected || (depth0 && depth0.set_selected) || alias2).call(alias1,(depth0 != null ? depth0.relational_operator : depth0),{"name":"set_selected","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </p>\n    </div>\n    <div class=\"col-xs-4 col-sm-6\">\n        <p>\n            <input id=\"aspect_discovery_SimpleSearch_field_filter_"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"\n                   class=\"ds-text-field form-control discovery-filter-input discovery-filter-input\"\n                   name=\"filter_"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.query || (depth0 != null ? depth0.query : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"query","hash":{},"data":data}) : helper)))
    + "\">\n        </p>\n    </div>\n    <div class=\"hidden-xs col-sm-2\">\n        <div class=\"btn-group btn-group-justified\">\n                <p class=\"btn-group\">\n                    <button id=\"aspect_discovery_SimpleSearch_field_add-filter_"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"\n                            class=\"ds-button-field btn btn-default filter-control filter-add filter-control filter-add\"\n                            name=\"add-filter_"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" type=\"submit\" title=\"Add Filter\"><span\n                            class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span></button>\n                </p>\n                <p class=\"btn-group\">\n                    <button id=\"aspect_discovery_SimpleSearch_field_remove-filter_"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"\n                            class=\"ds-button-field btn btn-default filter-control filter-remove filter-control filter-remove\"\n                            name=\"remove-filter_"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" type=\"submit\" title=\"Remove\"><span\n                            class=\"glyphicon glyphicon-minus-sign\" aria-hidden=\"true\"></span></button>\n                </p>\n        </div>\n    </div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depths[2] != null ? depths[2].i18n : depths[2])) != null ? stack1.filtertype : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression;

  return "                <option value=\""
    + alias1(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + alias1(container.lambda(depth0, depth0))
    + "</option>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depths[2] != null ? depths[2].i18n : depths[2])) != null ? stack1.filter_relational_operator : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, buffer = 
  "<!--\n\n    The contents of this file are subject to the license and copyright\n    detailed in the LICENSE and NOTICE files at the root of the source\n    tree and available online at\n\n    http://www.dspace.org/license/\n\n-->\n";
  stack1 = ((helper = (helper = helpers.filters || (depth0 != null ? depth0.filters : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"filters","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.filters) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true,"useDepths":true});

this["DSpace"]["templates"]["discovery_simple_filters"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <label href=\"#\" class=\"label label-primary\" data-index=\""
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.query || (depth0 != null ? depth0.query : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"query","hash":{},"data":data}) : helper)))
    + "&nbsp;&times;</label>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!--\n\n    The contents of this file are subject to the license and copyright\n    detailed in the LICENSE and NOTICE files at the root of the source\n    tree and available online at\n\n    http://www.dspace.org/license/\n\n-->\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.orig_filters : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["DSpace"]["templates"]["publication_records"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <li "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.record : depth0)) != null ? stack1.imported : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.record : depth0)) != null ? stack1["dc.title"] : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </li>\n                <li "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.record : depth0)) != null ? stack1.imported : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.record : depth0)) != null ? stack1["dc.contributor.author"] : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </li>\n                <li "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.record : depth0)) != null ? stack1.imported : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                    <button id=\"publication-records-import-"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.record : depth0)) != null ? stack1["dc.identifier.other"] : stack1), depth0))
    + "\" class=\"ds-button-field btn btn-default publication-records-import-btn float-right\" name=\"import\" type=\"submit\">Import</button>\n                </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "class=\"imported\"";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),"==",0,{"name":"ifCond","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "<span class=\"bold\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</span> ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "                        "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,(data && data.index),"<",5,{"name":"ifCond","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                        "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,(data && data.index),"==",5,{"name":"ifCond","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " <span>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.last),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </span>";
},"9":function(container,depth0,helpers,partials,data) {
    return ", ";
},"11":function(container,depth0,helpers,partials,data) {
    return "...";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!--\n\n    The contents of this file are subject to the license and copyright\n    detailed in the LICENSE and NOTICE files at the root of the source\n    tree and available online at\n\n    http://www.dspace.org/license/\n\n-->\n<p>Showing records "
    + alias4(((helper = (helper = helpers.shownStart || (depth0 != null ? depth0.shownStart : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shownStart","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.shownCount || (depth0 != null ? depth0.shownCount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shownCount","hash":{},"data":data}) : helper)))
    + " of "
    + alias4(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total","hash":{},"data":data}) : helper)))
    + "</p>\n<ul class=\"publication-records-modal\">\n    <li>\n        <ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.records : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </li>\n</ul>";
},"useData":true});