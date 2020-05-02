var N = null;var sourcesIndex = {};
sourcesIndex["k8s_openapi"] = {"name":"","dirs":[{"name":"v1_18","dirs":[{"name":"api","dirs":[{"name":"admissionregistration","dirs":[{"name":"v1","files":["mod.rs","mutating_webhook.rs","mutating_webhook_configuration.rs","rule_with_operations.rs","service_reference.rs","validating_webhook.rs","validating_webhook_configuration.rs","webhook_client_config.rs"]},{"name":"v1beta1","files":["mod.rs","mutating_webhook.rs","mutating_webhook_configuration.rs","rule_with_operations.rs","service_reference.rs","validating_webhook.rs","validating_webhook_configuration.rs","webhook_client_config.rs"]}],"files":["mod.rs"]},{"name":"apps","dirs":[{"name":"v1","files":["controller_revision.rs","daemon_set.rs","daemon_set_condition.rs","daemon_set_spec.rs","daemon_set_status.rs","daemon_set_update_strategy.rs","deployment.rs","deployment_condition.rs","deployment_spec.rs","deployment_status.rs","deployment_strategy.rs","mod.rs","replica_set.rs","replica_set_condition.rs","replica_set_spec.rs","replica_set_status.rs","rolling_update_daemon_set.rs","rolling_update_deployment.rs","rolling_update_stateful_set_strategy.rs","stateful_set.rs","stateful_set_condition.rs","stateful_set_spec.rs","stateful_set_status.rs","stateful_set_update_strategy.rs"]}],"files":["mod.rs"]},{"name":"auditregistration","dirs":[{"name":"v1alpha1","files":["audit_sink.rs","audit_sink_spec.rs","mod.rs","policy.rs","service_reference.rs","webhook.rs","webhook_client_config.rs","webhook_throttle_config.rs"]}],"files":["mod.rs"]},{"name":"authentication","dirs":[{"name":"v1","files":["bound_object_reference.rs","mod.rs","token_request.rs","token_request_spec.rs","token_request_status.rs","token_review.rs","token_review_spec.rs","token_review_status.rs","user_info.rs"]},{"name":"v1beta1","files":["mod.rs","token_review.rs","token_review_spec.rs","token_review_status.rs","user_info.rs"]}],"files":["mod.rs"]},{"name":"authorization","dirs":[{"name":"v1","files":["local_subject_access_review.rs","mod.rs","non_resource_attributes.rs","non_resource_rule.rs","resource_attributes.rs","resource_rule.rs","self_subject_access_review.rs","self_subject_access_review_spec.rs","self_subject_rules_review.rs","self_subject_rules_review_spec.rs","subject_access_review.rs","subject_access_review_spec.rs","subject_access_review_status.rs","subject_rules_review_status.rs"]},{"name":"v1beta1","files":["local_subject_access_review.rs","mod.rs","non_resource_attributes.rs","non_resource_rule.rs","resource_attributes.rs","resource_rule.rs","self_subject_access_review.rs","self_subject_access_review_spec.rs","self_subject_rules_review.rs","self_subject_rules_review_spec.rs","subject_access_review.rs","subject_access_review_spec.rs","subject_access_review_status.rs","subject_rules_review_status.rs"]}],"files":["mod.rs"]},{"name":"autoscaling","dirs":[{"name":"v1","files":["cross_version_object_reference.rs","horizontal_pod_autoscaler.rs","horizontal_pod_autoscaler_spec.rs","horizontal_pod_autoscaler_status.rs","mod.rs","scale.rs","scale_spec.rs","scale_status.rs"]},{"name":"v2beta1","files":["cross_version_object_reference.rs","external_metric_source.rs","external_metric_status.rs","horizontal_pod_autoscaler.rs","horizontal_pod_autoscaler_condition.rs","horizontal_pod_autoscaler_spec.rs","horizontal_pod_autoscaler_status.rs","metric_spec.rs","metric_status.rs","mod.rs","object_metric_source.rs","object_metric_status.rs","pods_metric_source.rs","pods_metric_status.rs","resource_metric_source.rs","resource_metric_status.rs"]},{"name":"v2beta2","files":["cross_version_object_reference.rs","external_metric_source.rs","external_metric_status.rs","horizontal_pod_autoscaler.rs","horizontal_pod_autoscaler_behavior.rs","horizontal_pod_autoscaler_condition.rs","horizontal_pod_autoscaler_spec.rs","horizontal_pod_autoscaler_status.rs","hpa_scaling_policy.rs","hpa_scaling_rules.rs","metric_identifier.rs","metric_spec.rs","metric_status.rs","metric_target.rs","metric_value_status.rs","mod.rs","object_metric_source.rs","object_metric_status.rs","pods_metric_source.rs","pods_metric_status.rs","resource_metric_source.rs","resource_metric_status.rs"]}],"files":["mod.rs"]},{"name":"batch","dirs":[{"name":"v1","files":["job.rs","job_condition.rs","job_spec.rs","job_status.rs","mod.rs"]},{"name":"v1beta1","files":["cron_job.rs","cron_job_spec.rs","cron_job_status.rs","job_template_spec.rs","mod.rs"]},{"name":"v2alpha1","files":["cron_job.rs","cron_job_spec.rs","cron_job_status.rs","job_template_spec.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"certificates","dirs":[{"name":"v1beta1","files":["certificate_signing_request.rs","certificate_signing_request_condition.rs","certificate_signing_request_spec.rs","certificate_signing_request_status.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"coordination","dirs":[{"name":"v1","files":["lease.rs","lease_spec.rs","mod.rs"]},{"name":"v1beta1","files":["lease.rs","lease_spec.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"core","dirs":[{"name":"v1","files":["affinity.rs","attached_volume.rs","aws_elastic_block_store_volume_source.rs","azure_disk_volume_source.rs","azure_file_persistent_volume_source.rs","azure_file_volume_source.rs","binding.rs","capabilities.rs","ceph_fs_persistent_volume_source.rs","ceph_fs_volume_source.rs","cinder_persistent_volume_source.rs","cinder_volume_source.rs","client_ip_config.rs","component_condition.rs","component_status.rs","config_map.rs","config_map_env_source.rs","config_map_key_selector.rs","config_map_node_config_source.rs","config_map_projection.rs","config_map_volume_source.rs","container.rs","container_image.rs","container_port.rs","container_state.rs","container_state_running.rs","container_state_terminated.rs","container_state_waiting.rs","container_status.rs","csi_persistent_volume_source.rs","csi_volume_source.rs","daemon_endpoint.rs","downward_api_projection.rs","downward_api_volume_file.rs","downward_api_volume_source.rs","empty_dir_volume_source.rs","endpoint_address.rs","endpoint_port.rs","endpoint_subset.rs","endpoints.rs","env_from_source.rs","env_var.rs","env_var_source.rs","ephemeral_container.rs","event.rs","event_series.rs","event_source.rs","exec_action.rs","fc_volume_source.rs","flex_persistent_volume_source.rs","flex_volume_source.rs","flocker_volume_source.rs","gce_persistent_disk_volume_source.rs","git_repo_volume_source.rs","glusterfs_persistent_volume_source.rs","glusterfs_volume_source.rs","handler.rs","host_alias.rs","host_path_volume_source.rs","http_get_action.rs","http_header.rs","iscsi_persistent_volume_source.rs","iscsi_volume_source.rs","key_to_path.rs","lifecycle.rs","limit_range.rs","limit_range_item.rs","limit_range_spec.rs","load_balancer_ingress.rs","load_balancer_status.rs","local_object_reference.rs","local_volume_source.rs","mod.rs","namespace.rs","namespace_condition.rs","namespace_spec.rs","namespace_status.rs","nfs_volume_source.rs","node.rs","node_address.rs","node_affinity.rs","node_condition.rs","node_config_source.rs","node_config_status.rs","node_daemon_endpoints.rs","node_selector.rs","node_selector_requirement.rs","node_selector_term.rs","node_spec.rs","node_status.rs","node_system_info.rs","object_field_selector.rs","object_reference.rs","persistent_volume.rs","persistent_volume_claim.rs","persistent_volume_claim_condition.rs","persistent_volume_claim_spec.rs","persistent_volume_claim_status.rs","persistent_volume_claim_volume_source.rs","persistent_volume_spec.rs","persistent_volume_status.rs","photon_persistent_disk_volume_source.rs","pod.rs","pod_affinity.rs","pod_affinity_term.rs","pod_anti_affinity.rs","pod_condition.rs","pod_dns_config.rs","pod_dns_config_option.rs","pod_ip.rs","pod_readiness_gate.rs","pod_security_context.rs","pod_spec.rs","pod_status.rs","pod_template.rs","pod_template_spec.rs","portworx_volume_source.rs","preferred_scheduling_term.rs","probe.rs","projected_volume_source.rs","quobyte_volume_source.rs","rbd_persistent_volume_source.rs","rbd_volume_source.rs","replication_controller.rs","replication_controller_condition.rs","replication_controller_spec.rs","replication_controller_status.rs","resource_field_selector.rs","resource_quota.rs","resource_quota_spec.rs","resource_quota_status.rs","resource_requirements.rs","scale_io_persistent_volume_source.rs","scale_io_volume_source.rs","scope_selector.rs","scoped_resource_selector_requirement.rs","se_linux_options.rs","secret.rs","secret_env_source.rs","secret_key_selector.rs","secret_projection.rs","secret_reference.rs","secret_volume_source.rs","security_context.rs","service.rs","service_account.rs","service_account_token_projection.rs","service_port.rs","service_spec.rs","service_status.rs","session_affinity_config.rs","storage_os_persistent_volume_source.rs","storage_os_volume_source.rs","sysctl.rs","taint.rs","tcp_socket_action.rs","toleration.rs","topology_selector_label_requirement.rs","topology_selector_term.rs","topology_spread_constraint.rs","typed_local_object_reference.rs","volume.rs","volume_device.rs","volume_mount.rs","volume_node_affinity.rs","volume_projection.rs","vsphere_virtual_disk_volume_source.rs","weighted_pod_affinity_term.rs","windows_security_context_options.rs"]}],"files":["mod.rs"]},{"name":"discovery","dirs":[{"name":"v1beta1","files":["endpoint.rs","endpoint_conditions.rs","endpoint_port.rs","endpoint_slice.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"events","dirs":[{"name":"v1beta1","files":["event.rs","event_series.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"extensions","dirs":[{"name":"v1beta1","files":["http_ingress_path.rs","http_ingress_rule_value.rs","ingress.rs","ingress_backend.rs","ingress_rule.rs","ingress_spec.rs","ingress_status.rs","ingress_tls.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"flowcontrol","dirs":[{"name":"v1alpha1","files":["flow_distinguisher_method.rs","flow_schema.rs","flow_schema_condition.rs","flow_schema_spec.rs","flow_schema_status.rs","group_subject.rs","limit_response.rs","limited_priority_level_configuration.rs","mod.rs","non_resource_policy_rule.rs","policy_rules_with_subjects.rs","priority_level_configuration.rs","priority_level_configuration_condition.rs","priority_level_configuration_reference.rs","priority_level_configuration_spec.rs","priority_level_configuration_status.rs","queuing_configuration.rs","resource_policy_rule.rs","service_account_subject.rs","subject.rs","user_subject.rs"]}],"files":["mod.rs"]},{"name":"networking","dirs":[{"name":"v1","files":["ip_block.rs","mod.rs","network_policy.rs","network_policy_egress_rule.rs","network_policy_ingress_rule.rs","network_policy_peer.rs","network_policy_port.rs","network_policy_spec.rs"]},{"name":"v1beta1","files":["http_ingress_path.rs","http_ingress_rule_value.rs","ingress.rs","ingress_backend.rs","ingress_class.rs","ingress_class_spec.rs","ingress_rule.rs","ingress_spec.rs","ingress_status.rs","ingress_tls.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"node","dirs":[{"name":"v1alpha1","files":["mod.rs","overhead.rs","runtime_class.rs","runtime_class_spec.rs","scheduling.rs"]},{"name":"v1beta1","files":["mod.rs","overhead.rs","runtime_class.rs","scheduling.rs"]}],"files":["mod.rs"]},{"name":"policy","dirs":[{"name":"v1beta1","files":["allowed_csi_driver.rs","allowed_flex_volume.rs","allowed_host_path.rs","eviction.rs","fs_group_strategy_options.rs","host_port_range.rs","id_range.rs","mod.rs","pod_disruption_budget.rs","pod_disruption_budget_spec.rs","pod_disruption_budget_status.rs","pod_security_policy.rs","pod_security_policy_spec.rs","run_as_group_strategy_options.rs","run_as_user_strategy_options.rs","runtime_class_strategy_options.rs","se_linux_strategy_options.rs","supplemental_groups_strategy_options.rs"]}],"files":["mod.rs"]},{"name":"rbac","dirs":[{"name":"v1","files":["aggregation_rule.rs","cluster_role.rs","cluster_role_binding.rs","mod.rs","policy_rule.rs","role.rs","role_binding.rs","role_ref.rs","subject.rs"]},{"name":"v1alpha1","files":["aggregation_rule.rs","cluster_role.rs","cluster_role_binding.rs","mod.rs","policy_rule.rs","role.rs","role_binding.rs","role_ref.rs","subject.rs"]},{"name":"v1beta1","files":["aggregation_rule.rs","cluster_role.rs","cluster_role_binding.rs","mod.rs","policy_rule.rs","role.rs","role_binding.rs","role_ref.rs","subject.rs"]}],"files":["mod.rs"]},{"name":"scheduling","dirs":[{"name":"v1","files":["mod.rs","priority_class.rs"]},{"name":"v1alpha1","files":["mod.rs","priority_class.rs"]},{"name":"v1beta1","files":["mod.rs","priority_class.rs"]}],"files":["mod.rs"]},{"name":"settings","dirs":[{"name":"v1alpha1","files":["mod.rs","pod_preset.rs","pod_preset_spec.rs"]}],"files":["mod.rs"]},{"name":"storage","dirs":[{"name":"v1","files":["csi_driver.rs","csi_driver_spec.rs","csi_node.rs","csi_node_driver.rs","csi_node_spec.rs","mod.rs","storage_class.rs","volume_attachment.rs","volume_attachment_source.rs","volume_attachment_spec.rs","volume_attachment_status.rs","volume_error.rs","volume_node_resources.rs"]},{"name":"v1alpha1","files":["mod.rs","volume_attachment.rs","volume_attachment_source.rs","volume_attachment_spec.rs","volume_attachment_status.rs","volume_error.rs"]},{"name":"v1beta1","files":["csi_driver.rs","csi_driver_spec.rs","csi_node.rs","csi_node_driver.rs","csi_node_spec.rs","mod.rs","storage_class.rs","volume_attachment.rs","volume_attachment_source.rs","volume_attachment_spec.rs","volume_attachment_status.rs","volume_error.rs","volume_node_resources.rs"]}],"files":["mod.rs"]}],"files":["mod.rs"]},{"name":"apiextensions_apiserver","dirs":[{"name":"pkg","dirs":[{"name":"apis","dirs":[{"name":"apiextensions","dirs":[{"name":"v1","files":["custom_resource_column_definition.rs","custom_resource_conversion.rs","custom_resource_definition.rs","custom_resource_definition_condition.rs","custom_resource_definition_names.rs","custom_resource_definition_spec.rs","custom_resource_definition_status.rs","custom_resource_definition_version.rs","custom_resource_subresource_scale.rs","custom_resource_subresource_status.rs","custom_resource_subresources.rs","custom_resource_validation.rs","external_documentation.rs","json.rs","json_schema_props.rs","json_schema_props_or_array.rs","json_schema_props_or_bool.rs","json_schema_props_or_string_array.rs","mod.rs","service_reference.rs","webhook_client_config.rs","webhook_conversion.rs"]},{"name":"v1beta1","files":["custom_resource_column_definition.rs","custom_resource_conversion.rs","custom_resource_definition.rs","custom_resource_definition_condition.rs","custom_resource_definition_names.rs","custom_resource_definition_spec.rs","custom_resource_definition_status.rs","custom_resource_definition_version.rs","custom_resource_subresource_scale.rs","custom_resource_subresource_status.rs","custom_resource_subresources.rs","custom_resource_validation.rs","external_documentation.rs","json.rs","json_schema_props.rs","json_schema_props_or_array.rs","json_schema_props_or_bool.rs","json_schema_props_or_string_array.rs","mod.rs","service_reference.rs","webhook_client_config.rs"]}],"files":["mod.rs"]}],"files":["mod.rs"]}],"files":["mod.rs"]}],"files":["mod.rs"]},{"name":"apimachinery","dirs":[{"name":"pkg","dirs":[{"name":"api","dirs":[{"name":"resource","files":["mod.rs","quantity.rs"]}],"files":["mod.rs"]},{"name":"apis","dirs":[{"name":"meta","dirs":[{"name":"v1","files":["api_group.rs","api_group_list.rs","api_resource.rs","api_resource_list.rs","api_versions.rs","delete_options.rs","fields_v1.rs","group_version_for_discovery.rs","label_selector.rs","label_selector_requirement.rs","list_meta.rs","managed_fields_entry.rs","micro_time.rs","mod.rs","object_meta.rs","owner_reference.rs","patch.rs","preconditions.rs","server_address_by_client_cidr.rs","status.rs","status_cause.rs","status_details.rs","time.rs","watch_event.rs"]}],"files":["mod.rs"]}],"files":["mod.rs"]},{"name":"runtime","files":["mod.rs","raw_extension.rs"]},{"name":"util","dirs":[{"name":"intstr","files":["int_or_string.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"version","files":["info.rs","mod.rs"]}],"files":["mod.rs"]}],"files":["mod.rs"]},{"name":"kube_aggregator","dirs":[{"name":"pkg","dirs":[{"name":"apis","dirs":[{"name":"apiregistration","dirs":[{"name":"v1","files":["api_service.rs","api_service_condition.rs","api_service_spec.rs","api_service_status.rs","mod.rs","service_reference.rs"]},{"name":"v1beta1","files":["api_service.rs","api_service_condition.rs","api_service_spec.rs","api_service_status.rs","mod.rs","service_reference.rs"]}],"files":["mod.rs"]}],"files":["mod.rs"]}],"files":["mod.rs"]}],"files":["mod.rs"]}],"files":["create_optional.rs","create_response.rs","delete_optional.rs","delete_response.rs","list.rs","list_optional.rs","list_response.rs","mod.rs","patch_optional.rs","patch_response.rs","replace_optional.rs","replace_response.rs","watch_optional.rs","watch_response.rs"]}],"files":["lib.rs"]};
sourcesIndex["k8s_openapi_derive"] = {"name":"","files":["custom_resource_definition.rs","lib.rs"]};
createSourceSidebar();
