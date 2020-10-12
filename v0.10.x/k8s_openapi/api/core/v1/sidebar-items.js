initSidebarItems({"enum":[["ReadComponentStatusResponse","Use `<ReadComponentStatusResponse as Response>::try_from_parts` to parse the HTTP response body of [`ComponentStatus::read_component_status`]"],["ReadNamespaceResponse","Use `<ReadNamespaceResponse as Response>::try_from_parts` to parse the HTTP response body of [`Namespace::read_namespace`]"],["ReadNamespaceStatusResponse","Use `<ReadNamespaceStatusResponse as Response>::try_from_parts` to parse the HTTP response body of [`Namespace::read_namespace_status`]"],["ReadNamespacedConfigMapResponse","Use `<ReadNamespacedConfigMapResponse as Response>::try_from_parts` to parse the HTTP response body of [`ConfigMap::read_namespaced_config_map`]"],["ReadNamespacedEndpointsResponse","Use `<ReadNamespacedEndpointsResponse as Response>::try_from_parts` to parse the HTTP response body of [`Endpoints::read_namespaced_endpoints`]"],["ReadNamespacedEventResponse","Use `<ReadNamespacedEventResponse as Response>::try_from_parts` to parse the HTTP response body of [`Event::read_namespaced_event`]"],["ReadNamespacedLimitRangeResponse","Use `<ReadNamespacedLimitRangeResponse as Response>::try_from_parts` to parse the HTTP response body of [`LimitRange::read_namespaced_limit_range`]"],["ReadNamespacedPersistentVolumeClaimResponse","Use `<ReadNamespacedPersistentVolumeClaimResponse as Response>::try_from_parts` to parse the HTTP response body of [`PersistentVolumeClaim::read_namespaced_persistent_volume_claim`]"],["ReadNamespacedPersistentVolumeClaimStatusResponse","Use `<ReadNamespacedPersistentVolumeClaimStatusResponse as Response>::try_from_parts` to parse the HTTP response body of [`PersistentVolumeClaim::read_namespaced_persistent_volume_claim_status`]"],["ReadNamespacedPodLogResponse","Use `<ReadNamespacedPodLogResponse as Response>::try_from_parts` to parse the HTTP response body of [`Pod::read_namespaced_pod_log`]"],["ReadNamespacedPodResponse","Use `<ReadNamespacedPodResponse as Response>::try_from_parts` to parse the HTTP response body of [`Pod::read_namespaced_pod`]"],["ReadNamespacedPodStatusResponse","Use `<ReadNamespacedPodStatusResponse as Response>::try_from_parts` to parse the HTTP response body of [`Pod::read_namespaced_pod_status`]"],["ReadNamespacedPodTemplateResponse","Use `<ReadNamespacedPodTemplateResponse as Response>::try_from_parts` to parse the HTTP response body of [`PodTemplate::read_namespaced_pod_template`]"],["ReadNamespacedReplicationControllerResponse","Use `<ReadNamespacedReplicationControllerResponse as Response>::try_from_parts` to parse the HTTP response body of [`ReplicationController::read_namespaced_replication_controller`]"],["ReadNamespacedReplicationControllerStatusResponse","Use `<ReadNamespacedReplicationControllerStatusResponse as Response>::try_from_parts` to parse the HTTP response body of [`ReplicationController::read_namespaced_replication_controller_status`]"],["ReadNamespacedResourceQuotaResponse","Use `<ReadNamespacedResourceQuotaResponse as Response>::try_from_parts` to parse the HTTP response body of [`ResourceQuota::read_namespaced_resource_quota`]"],["ReadNamespacedResourceQuotaStatusResponse","Use `<ReadNamespacedResourceQuotaStatusResponse as Response>::try_from_parts` to parse the HTTP response body of [`ResourceQuota::read_namespaced_resource_quota_status`]"],["ReadNamespacedSecretResponse","Use `<ReadNamespacedSecretResponse as Response>::try_from_parts` to parse the HTTP response body of [`Secret::read_namespaced_secret`]"],["ReadNamespacedServiceAccountResponse","Use `<ReadNamespacedServiceAccountResponse as Response>::try_from_parts` to parse the HTTP response body of [`ServiceAccount::read_namespaced_service_account`]"],["ReadNamespacedServiceResponse","Use `<ReadNamespacedServiceResponse as Response>::try_from_parts` to parse the HTTP response body of [`Service::read_namespaced_service`]"],["ReadNamespacedServiceStatusResponse","Use `<ReadNamespacedServiceStatusResponse as Response>::try_from_parts` to parse the HTTP response body of [`Service::read_namespaced_service_status`]"],["ReadNodeResponse","Use `<ReadNodeResponse as Response>::try_from_parts` to parse the HTTP response body of [`Node::read_node`]"],["ReadNodeStatusResponse","Use `<ReadNodeStatusResponse as Response>::try_from_parts` to parse the HTTP response body of [`Node::read_node_status`]"],["ReadPersistentVolumeResponse","Use `<ReadPersistentVolumeResponse as Response>::try_from_parts` to parse the HTTP response body of [`PersistentVolume::read_persistent_volume`]"],["ReadPersistentVolumeStatusResponse","Use `<ReadPersistentVolumeStatusResponse as Response>::try_from_parts` to parse the HTTP response body of [`PersistentVolume::read_persistent_volume_status`]"]],"struct":[["AWSElasticBlockStoreVolumeSource","Represents a Persistent Disk resource in AWS."],["Affinity","Affinity is a group of affinity scheduling rules."],["AttachedVolume","AttachedVolume describes a volume attached to a node"],["AzureDiskVolumeSource","AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod."],["AzureFilePersistentVolumeSource","AzureFile represents an Azure File Service mount on the host and bind mount to the pod."],["AzureFileVolumeSource","AzureFile represents an Azure File Service mount on the host and bind mount to the pod."],["Binding","Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead."],["CSIPersistentVolumeSource","Represents storage that is managed by an external CSI volume driver (Beta feature)"],["CSIVolumeSource","Represents a source location of a volume to mount, managed by an external CSI driver"],["Capabilities","Adds and removes POSIX capabilities from running containers."],["CephFSPersistentVolumeSource","Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling."],["CephFSVolumeSource","Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling."],["CinderPersistentVolumeSource","Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling."],["CinderVolumeSource","Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling."],["ClientIPConfig","ClientIPConfig represents the configurations of Client IP based session affinity."],["ComponentCondition","Information about the condition of a component."],["ComponentStatus","ComponentStatus (and ComponentStatusList) holds the cluster validation info. Deprecated: This API is deprecated in v1.19+"],["ConfigMap","ConfigMap holds configuration data for pods to consume."],["ConfigMapEnvSource","ConfigMapEnvSource selects a ConfigMap to populate the environment variables with."],["ConfigMapKeySelector","Selects a key from a ConfigMap."],["ConfigMapNodeConfigSource","ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node."],["ConfigMapProjection","Adapts a ConfigMap into a projected volume."],["ConfigMapVolumeSource","Adapts a ConfigMap into a volume."],["ConnectDeleteNamespacedPodProxyOptional","Optional parameters of [`Pod::connect_delete_namespaced_pod_proxy`]"],["ConnectDeleteNamespacedPodProxyWithPathOptional","Optional parameters of [`Pod::connect_delete_namespaced_pod_proxy_with_path`]"],["ConnectDeleteNamespacedServiceProxyOptional","Optional parameters of [`Service::connect_delete_namespaced_service_proxy`]"],["ConnectDeleteNamespacedServiceProxyWithPathOptional","Optional parameters of [`Service::connect_delete_namespaced_service_proxy_with_path`]"],["ConnectDeleteNodeProxyOptional","Optional parameters of [`Node::connect_delete_node_proxy`]"],["ConnectDeleteNodeProxyWithPathOptional","Optional parameters of [`Node::connect_delete_node_proxy_with_path`]"],["ConnectGetNamespacedPodAttachOptional","Optional parameters of [`Pod::connect_get_namespaced_pod_attach`]"],["ConnectGetNamespacedPodExecOptional","Optional parameters of [`Pod::connect_get_namespaced_pod_exec`]"],["ConnectGetNamespacedPodPortforwardOptional","Optional parameters of [`Pod::connect_get_namespaced_pod_portforward`]"],["ConnectGetNamespacedPodProxyOptional","Optional parameters of [`Pod::connect_get_namespaced_pod_proxy`]"],["ConnectGetNamespacedPodProxyWithPathOptional","Optional parameters of [`Pod::connect_get_namespaced_pod_proxy_with_path`]"],["ConnectGetNamespacedServiceProxyOptional","Optional parameters of [`Service::connect_get_namespaced_service_proxy`]"],["ConnectGetNamespacedServiceProxyWithPathOptional","Optional parameters of [`Service::connect_get_namespaced_service_proxy_with_path`]"],["ConnectGetNodeProxyOptional","Optional parameters of [`Node::connect_get_node_proxy`]"],["ConnectGetNodeProxyWithPathOptional","Optional parameters of [`Node::connect_get_node_proxy_with_path`]"],["ConnectPatchNamespacedPodProxyOptional","Optional parameters of [`Pod::connect_patch_namespaced_pod_proxy`]"],["ConnectPatchNamespacedPodProxyWithPathOptional","Optional parameters of [`Pod::connect_patch_namespaced_pod_proxy_with_path`]"],["ConnectPatchNamespacedServiceProxyOptional","Optional parameters of [`Service::connect_patch_namespaced_service_proxy`]"],["ConnectPatchNamespacedServiceProxyWithPathOptional","Optional parameters of [`Service::connect_patch_namespaced_service_proxy_with_path`]"],["ConnectPatchNodeProxyOptional","Optional parameters of [`Node::connect_patch_node_proxy`]"],["ConnectPatchNodeProxyWithPathOptional","Optional parameters of [`Node::connect_patch_node_proxy_with_path`]"],["ConnectPostNamespacedPodAttachOptional","Optional parameters of [`Pod::connect_post_namespaced_pod_attach`]"],["ConnectPostNamespacedPodExecOptional","Optional parameters of [`Pod::connect_post_namespaced_pod_exec`]"],["ConnectPostNamespacedPodPortforwardOptional","Optional parameters of [`Pod::connect_post_namespaced_pod_portforward`]"],["ConnectPostNamespacedPodProxyOptional","Optional parameters of [`Pod::connect_post_namespaced_pod_proxy`]"],["ConnectPostNamespacedPodProxyWithPathOptional","Optional parameters of [`Pod::connect_post_namespaced_pod_proxy_with_path`]"],["ConnectPostNamespacedServiceProxyOptional","Optional parameters of [`Service::connect_post_namespaced_service_proxy`]"],["ConnectPostNamespacedServiceProxyWithPathOptional","Optional parameters of [`Service::connect_post_namespaced_service_proxy_with_path`]"],["ConnectPostNodeProxyOptional","Optional parameters of [`Node::connect_post_node_proxy`]"],["ConnectPostNodeProxyWithPathOptional","Optional parameters of [`Node::connect_post_node_proxy_with_path`]"],["ConnectPutNamespacedPodProxyOptional","Optional parameters of [`Pod::connect_put_namespaced_pod_proxy`]"],["ConnectPutNamespacedPodProxyWithPathOptional","Optional parameters of [`Pod::connect_put_namespaced_pod_proxy_with_path`]"],["ConnectPutNamespacedServiceProxyOptional","Optional parameters of [`Service::connect_put_namespaced_service_proxy`]"],["ConnectPutNamespacedServiceProxyWithPathOptional","Optional parameters of [`Service::connect_put_namespaced_service_proxy_with_path`]"],["ConnectPutNodeProxyOptional","Optional parameters of [`Node::connect_put_node_proxy`]"],["ConnectPutNodeProxyWithPathOptional","Optional parameters of [`Node::connect_put_node_proxy_with_path`]"],["Container","A single application container that you want to run within a pod."],["ContainerImage","Describe a container image"],["ContainerPort","ContainerPort represents a network port in a single container."],["ContainerState","ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting."],["ContainerStateRunning","ContainerStateRunning is a running state of a container."],["ContainerStateTerminated","ContainerStateTerminated is a terminated state of a container."],["ContainerStateWaiting","ContainerStateWaiting is a waiting state of a container."],["ContainerStatus","ContainerStatus contains details for the current status of this container."],["DaemonEndpoint","DaemonEndpoint contains information about a single Daemon endpoint."],["DownwardAPIProjection","Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode."],["DownwardAPIVolumeFile","DownwardAPIVolumeFile represents information to create the file containing the pod field"],["DownwardAPIVolumeSource","DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling."],["EmptyDirVolumeSource","Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling."],["EndpointAddress","EndpointAddress is a tuple that describes single IP address."],["EndpointPort","EndpointPort is a tuple that describes a single port."],["EndpointSubset","EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given: { Addresses: [{\"ip\": \"10.10.1.1\"}, {\"ip\": \"10.10.2.2\"}], Ports:     [{\"name\": \"a\", \"port\": 8675}, {\"name\": \"b\", \"port\": 309}] } The resulting set of endpoints can be viewed as: a: [ 10.10.1.1:8675, 10.10.2.2:8675 ], b: [ 10.10.1.1:309, 10.10.2.2:309 ]"],["Endpoints","Endpoints is a collection of endpoints that implement the actual service. Example: Name: \"mysvc\", Subsets: [ { Addresses: [{\"ip\": \"10.10.1.1\"}, {\"ip\": \"10.10.2.2\"}], Ports: [{\"name\": \"a\", \"port\": 8675}, {\"name\": \"b\", \"port\": 309}] }, { Addresses: [{\"ip\": \"10.10.3.3\"}], Ports: [{\"name\": \"a\", \"port\": 93}, {\"name\": \"b\", \"port\": 76}] }, ]"],["EnvFromSource","EnvFromSource represents the source of a set of ConfigMaps"],["EnvVar","EnvVar represents an environment variable present in a Container."],["EnvVarSource","EnvVarSource represents a source for the value of an EnvVar."],["EphemeralContainer","An EphemeralContainer is a container that may be added temporarily to an existing pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a pod is removed or restarted. If an ephemeral container causes a pod to exceed its resource allocation, the pod may be evicted. Ephemeral containers may not be added by directly updating the pod spec. They must be added via the pod's ephemeralcontainers subresource, and they will appear in the pod spec once added. This is an alpha feature enabled by the EphemeralContainers feature flag."],["EphemeralVolumeSource","Represents an ephemeral volume that is handled by a normal storage driver."],["Event","Event is a report of an event somewhere in the cluster."],["EventSeries","EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time."],["EventSource","EventSource contains information for an event."],["ExecAction","ExecAction describes a \"run in container\" action."],["FCVolumeSource","Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling."],["FlexPersistentVolumeSource","FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin."],["FlexVolumeSource","FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin."],["FlockerVolumeSource","Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling."],["GCEPersistentDiskVolumeSource","Represents a Persistent Disk resource in Google Compute Engine."],["GitRepoVolumeSource","Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling."],["GlusterfsPersistentVolumeSource","Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling."],["GlusterfsVolumeSource","Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling."],["HTTPGetAction","HTTPGetAction describes an action based on HTTP Get requests."],["HTTPHeader","HTTPHeader describes a custom header to be used in HTTP probes"],["Handler","Handler defines a specific action that should be taken"],["HostAlias","HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file."],["HostPathVolumeSource","Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling."],["ISCSIPersistentVolumeSource","ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling."],["ISCSIVolumeSource","Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling."],["KeyToPath","Maps a string key to a path within a volume."],["Lifecycle","Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted."],["LimitRange","LimitRange sets resource usage limits for each kind of resource in a Namespace."],["LimitRangeItem","LimitRangeItem defines a min/max usage limit for any resource that matches on kind."],["LimitRangeSpec","LimitRangeSpec defines a min/max usage limit for resources that match on kind."],["LoadBalancerIngress","LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point."],["LoadBalancerStatus","LoadBalancerStatus represents the status of a load-balancer."],["LocalObjectReference","LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace."],["LocalVolumeSource","Local represents directly-attached storage with node affinity (Beta feature)"],["NFSVolumeSource","Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling."],["Namespace","Namespace provides a scope for Names. Use of multiple namespaces is optional."],["NamespaceCondition","NamespaceCondition contains details about state of namespace."],["NamespaceSpec","NamespaceSpec describes the attributes on a Namespace."],["NamespaceStatus","NamespaceStatus is information about the current status of a Namespace."],["Node","Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd)."],["NodeAddress","NodeAddress contains information for the node's address."],["NodeAffinity","Node affinity is a group of node affinity scheduling rules."],["NodeCondition","NodeCondition contains condition information for a node."],["NodeConfigSource","NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil."],["NodeConfigStatus","NodeConfigStatus describes the status of the config assigned by Node.Spec.ConfigSource."],["NodeDaemonEndpoints","NodeDaemonEndpoints lists ports opened by daemons running on the Node."],["NodeSelector","A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms."],["NodeSelectorRequirement","A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values."],["NodeSelectorTerm","A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm."],["NodeSpec","NodeSpec describes the attributes that a node is created with."],["NodeStatus","NodeStatus is information about the current status of a node."],["NodeSystemInfo","NodeSystemInfo is a set of ids/uuids to uniquely identify the node."],["ObjectFieldSelector","ObjectFieldSelector selects an APIVersioned field of an object."],["ObjectReference","ObjectReference contains enough information to let you inspect or modify the referred object."],["PersistentVolume","PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes"],["PersistentVolumeClaim","PersistentVolumeClaim is a user's request for and claim to a persistent volume"],["PersistentVolumeClaimCondition","PersistentVolumeClaimCondition contails details about state of pvc"],["PersistentVolumeClaimSpec","PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes"],["PersistentVolumeClaimStatus","PersistentVolumeClaimStatus is the current status of a persistent volume claim."],["PersistentVolumeClaimTemplate","PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource."],["PersistentVolumeClaimVolumeSource","PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system)."],["PersistentVolumeSpec","PersistentVolumeSpec is the specification of a persistent volume."],["PersistentVolumeStatus","PersistentVolumeStatus is the current status of a persistent volume."],["PhotonPersistentDiskVolumeSource","Represents a Photon Controller persistent disk resource."],["Pod","Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts."],["PodAffinity","Pod affinity is a group of inter pod affinity scheduling rules."],["PodAffinityTerm","Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running"],["PodAntiAffinity","Pod anti affinity is a group of inter pod anti affinity scheduling rules."],["PodCondition","PodCondition contains details for the current condition of this pod."],["PodDNSConfig","PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy."],["PodDNSConfigOption","PodDNSConfigOption defines DNS resolver options of a pod."],["PodIP","IP address information for entries in the (plural) PodIPs field. Each entry includes: IP: An IP address allocated to the pod. Routable at least within the cluster."],["PodReadinessGate","PodReadinessGate contains the reference to a pod condition"],["PodSecurityContext","PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext."],["PodSpec","PodSpec is a description of a pod."],["PodStatus","PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane."],["PodTemplate","PodTemplate describes a template for creating copies of a predefined pod."],["PodTemplateSpec","PodTemplateSpec describes the data a pod should have when created from a template"],["PortworxVolumeSource","PortworxVolumeSource represents a Portworx volume resource."],["PreferredSchedulingTerm","An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op)."],["Probe","Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic."],["ProjectedVolumeSource","Represents a projected volume source"],["QuobyteVolumeSource","Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling."],["RBDPersistentVolumeSource","Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling."],["RBDVolumeSource","Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling."],["ReadComponentStatusOptional","Optional parameters of [`ComponentStatus::read_component_status`]"],["ReadNamespaceOptional","Optional parameters of [`Namespace::read_namespace`]"],["ReadNamespaceStatusOptional","Optional parameters of [`Namespace::read_namespace_status`]"],["ReadNamespacedConfigMapOptional","Optional parameters of [`ConfigMap::read_namespaced_config_map`]"],["ReadNamespacedEndpointsOptional","Optional parameters of [`Endpoints::read_namespaced_endpoints`]"],["ReadNamespacedEventOptional","Optional parameters of [`Event::read_namespaced_event`]"],["ReadNamespacedLimitRangeOptional","Optional parameters of [`LimitRange::read_namespaced_limit_range`]"],["ReadNamespacedPersistentVolumeClaimOptional","Optional parameters of [`PersistentVolumeClaim::read_namespaced_persistent_volume_claim`]"],["ReadNamespacedPersistentVolumeClaimStatusOptional","Optional parameters of [`PersistentVolumeClaim::read_namespaced_persistent_volume_claim_status`]"],["ReadNamespacedPodLogOptional","Optional parameters of [`Pod::read_namespaced_pod_log`]"],["ReadNamespacedPodOptional","Optional parameters of [`Pod::read_namespaced_pod`]"],["ReadNamespacedPodStatusOptional","Optional parameters of [`Pod::read_namespaced_pod_status`]"],["ReadNamespacedPodTemplateOptional","Optional parameters of [`PodTemplate::read_namespaced_pod_template`]"],["ReadNamespacedReplicationControllerOptional","Optional parameters of [`ReplicationController::read_namespaced_replication_controller`]"],["ReadNamespacedReplicationControllerStatusOptional","Optional parameters of [`ReplicationController::read_namespaced_replication_controller_status`]"],["ReadNamespacedResourceQuotaOptional","Optional parameters of [`ResourceQuota::read_namespaced_resource_quota`]"],["ReadNamespacedResourceQuotaStatusOptional","Optional parameters of [`ResourceQuota::read_namespaced_resource_quota_status`]"],["ReadNamespacedSecretOptional","Optional parameters of [`Secret::read_namespaced_secret`]"],["ReadNamespacedServiceAccountOptional","Optional parameters of [`ServiceAccount::read_namespaced_service_account`]"],["ReadNamespacedServiceOptional","Optional parameters of [`Service::read_namespaced_service`]"],["ReadNamespacedServiceStatusOptional","Optional parameters of [`Service::read_namespaced_service_status`]"],["ReadNodeOptional","Optional parameters of [`Node::read_node`]"],["ReadNodeStatusOptional","Optional parameters of [`Node::read_node_status`]"],["ReadPersistentVolumeOptional","Optional parameters of [`PersistentVolume::read_persistent_volume`]"],["ReadPersistentVolumeStatusOptional","Optional parameters of [`PersistentVolume::read_persistent_volume_status`]"],["ReplicationController","ReplicationController represents the configuration of a replication controller."],["ReplicationControllerCondition","ReplicationControllerCondition describes the state of a replication controller at a certain point."],["ReplicationControllerSpec","ReplicationControllerSpec is the specification of a replication controller."],["ReplicationControllerStatus","ReplicationControllerStatus represents the current status of a replication controller."],["ResourceFieldSelector","ResourceFieldSelector represents container resources (cpu, memory) and their output format"],["ResourceQuota","ResourceQuota sets aggregate quota restrictions enforced per namespace"],["ResourceQuotaSpec","ResourceQuotaSpec defines the desired hard limits to enforce for Quota."],["ResourceQuotaStatus","ResourceQuotaStatus defines the enforced hard limits and observed use."],["ResourceRequirements","ResourceRequirements describes the compute resource requirements."],["SELinuxOptions","SELinuxOptions are the labels to be applied to the container"],["ScaleIOPersistentVolumeSource","ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume"],["ScaleIOVolumeSource","ScaleIOVolumeSource represents a persistent ScaleIO volume"],["ScopeSelector","A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements."],["ScopedResourceSelectorRequirement","A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values."],["SeccompProfile","SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set."],["Secret","Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes."],["SecretEnvSource","SecretEnvSource selects a Secret to populate the environment variables with."],["SecretKeySelector","SecretKeySelector selects a key of a Secret."],["SecretProjection","Adapts a secret into a projected volume."],["SecretReference","SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace"],["SecretVolumeSource","Adapts a Secret into a volume."],["SecurityContext","SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence."],["Service","Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy."],["ServiceAccount","ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets"],["ServiceAccountTokenProjection","ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise)."],["ServicePort","ServicePort contains information on service's port."],["ServiceSpec","ServiceSpec describes the attributes that a user creates on a service."],["ServiceStatus","ServiceStatus represents the current status of a service."],["SessionAffinityConfig","SessionAffinityConfig represents the configurations of session affinity."],["StorageOSPersistentVolumeSource","Represents a StorageOS persistent volume resource."],["StorageOSVolumeSource","Represents a StorageOS persistent volume resource."],["Sysctl","Sysctl defines a kernel parameter to be set"],["TCPSocketAction","TCPSocketAction describes an action based on opening a socket"],["Taint","The node this Taint is attached to has the \"effect\" on any pod that does not tolerate the Taint."],["Toleration","The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>."],["TopologySelectorLabelRequirement","A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future."],["TopologySelectorTerm","A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future."],["TopologySpreadConstraint","TopologySpreadConstraint specifies how to spread matching pods among the given topology."],["TypedLocalObjectReference","TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace."],["Volume","Volume represents a named volume in a pod that may be accessed by any container in the pod."],["VolumeDevice","volumeDevice describes a mapping of a raw block device within a container."],["VolumeMount","VolumeMount describes a mounting of a Volume within a container."],["VolumeNodeAffinity","VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from."],["VolumeProjection","Projection that may be projected along with other supported volume types"],["VsphereVirtualDiskVolumeSource","Represents a vSphere volume resource."],["WeightedPodAffinityTerm","The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)"],["WindowsSecurityContextOptions","WindowsSecurityContextOptions contain Windows-specific options and credentials."]]});